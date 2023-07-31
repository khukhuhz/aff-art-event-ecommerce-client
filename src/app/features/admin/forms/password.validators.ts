import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const PasswordStrengthValidator = function (
  control: AbstractControl,
): ValidationErrors | null {
  let value: string = control.value || '';

  if (!value) {
    return null;
  }

  let upperCaseCharacters = /[A-Z]+/g;
  if (upperCaseCharacters.test(value) === false) {
    return { passwordStrength: `Password must contains Upper case characters` };
  }

  let lowerCaseCharacters = /[a-z]+/g;
  if (lowerCaseCharacters.test(value) === false) {
    return { passwordStrength: `Password must contains lower case characters` };
  }

  let numberCharacters = /[0-9]+/g;
  if (numberCharacters.test(value) === false) {
    return { passwordStrength: `Password must contains number characters` };
  }

  let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (specialCharacters.test(value) === false) {
    return { passwordStrength: `Password must contains special character` };
  }

  if (value.length < 8) {
    return { passwordStrength: `Password must be at least 8 characters long.` };
  }

  if (value.length > 15) {
    return { passwordStrength: `Password must be at most 15 characters long.` };
  }
  return null;
};

export const passwordMatchingValidatior: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmedPassword');

  return password?.value === confirmPassword?.value ? null : { notmatched: true };
};
