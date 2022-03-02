import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  validateForm!: FormGroup;

  constructor() {}

  public tel(control: AbstractControl): MyValidationErrors | null {
    const value = control.value;
    if (isEmptyInputValue(value)) {
      return null;
    }
    return isTel(value) ? null : { tel: { 'zh-cn': `手机号码格式不正确` } };
  }
}
export type MyErrorsOptions = { 'zh-cn': string } & Record<string, NzSafeAny>;
export type MyValidationErrors = Record<string, MyErrorsOptions>;

function isEmptyInputValue(value: NzSafeAny): boolean {
  return value == null || value.length === 0;
}

function isTel(value: string): boolean {
  return (
    typeof value === 'string' &&
    /(^(13[0-9]|14[5|7]|15[0-9]|18[0|1|2|3|5|6|7|8|9])\d{8}$)/.test(value)
  );
}
