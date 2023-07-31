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
    return { passwordStrength: `Le mot de passe doit contenir au moins un caractère majuscule!` };
  }

  let lowerCaseCharacters = /[a-z]+/g;
  if (lowerCaseCharacters.test(value) === false) {
    return { passwordStrength: `Le mot de passe doit contenir au moins un caractère minuscule!` };
  }

  let numberCharacters = /[0-9]+/g;
  if (numberCharacters.test(value) === false) {
    return { passwordStrength: `Le mot de passe doit contenir des nombres!` };
  }

  let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (specialCharacters.test(value) === false) {
    return { passwordStrength: `Le mot de passe doit contenir un caractère spécial!` };
  }

  if (value.length < 8) {
    return { passwordStrength: `Le mot de passe doit comporter au moins 8 caractères!` };
  }

  if (value.length > 15) {
    return { passwordStrength: `Le mot de passe doit comporter au maximum 15 caractères!` };
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
