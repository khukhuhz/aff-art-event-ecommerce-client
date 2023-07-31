import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Role } from '@core/enums';
import { SignUpRequest } from '@core/interfaces';
import { EcommerceFacade } from '../ecommerce.facade';
import { SubscriptionForm } from '../forms';

@Component({
  selector: 'app-subscription',
  templateUrl: 'subscription.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubscriptionComponent {
  constructor(private readonly ecommerceFacade: EcommerceFacade) {}

  get signUpForm(): FormGroup<SubscriptionForm> {
    return this.ecommerceFacade.signUpForm;
  }

  get email(): FormControl<string> {
    return this.ecommerceFacade.signUpForm.controls.email;
  }

  get firstName(): FormControl<string> {
    return this.ecommerceFacade.signUpForm.controls.firstName;
  }

  get lastName(): FormControl<string> {
    return this.ecommerceFacade.signUpForm.controls.lastName;
  }

  get password(): FormControl<string> {
    return this.ecommerceFacade.signUpForm.controls.password;
  }

  get confirmedPassword(): FormControl<string> {
    return this.ecommerceFacade.signUpForm.controls.confirmedPassword;
  }

  onSubmit() {
    const signUpRequest: SignUpRequest = {
      ...this.signUpForm.getRawValue(),
      role: Role.USER,
    };
    this.ecommerceFacade.signUp(signUpRequest);
    this.signUpForm.reset();
  }
}
