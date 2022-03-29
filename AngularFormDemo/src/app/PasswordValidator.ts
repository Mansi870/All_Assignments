import { AbstractControl } from '@angular/forms';

export function ValidatePWD(control: AbstractControl) {
  //If the password is not starting with Admin then flag invalidPWD is set to true and that will be returned.
  if (!control.value.startsWith('Admin')) {
    return { invalidPwd: true };
  }
  return null;
}
export function ValidateEMAIL(control: AbstractControl) {
  //If the password is not starting with Admin then flag invalidPWD is set to true and that will be returned.
  if (!control.value.endsWith('.com')) {
    return { invalidPwd: true };
  }
  return null;
}
