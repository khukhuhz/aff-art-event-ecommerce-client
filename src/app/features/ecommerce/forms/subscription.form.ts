import { FormControl } from '@angular/forms';

export interface SubscriptionForm {
  email: FormControl<string>;
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  password: FormControl<string>;
  confirmedPassword: FormControl<string>;
}
