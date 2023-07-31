import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EcommerceFacade } from '../ecommerce.facade';
import { LoginForm } from '../forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  constructor(private readonly ecommerceFacade: EcommerceFacade) {}

  get loginForm(): FormGroup<LoginForm> {
    return this.ecommerceFacade.loginForm;
  }

  get email(): FormControl<string> {
    return this.ecommerceFacade.loginForm.controls.email;
  }

  get password(): FormControl<string> {
    return this.ecommerceFacade.loginForm.controls.password;
  }

  onSubmit() {
    this.ecommerceFacade.signIn();
    this.loginForm.reset();
  }
}
