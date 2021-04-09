import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { number } from './validator';

const NUMBER_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => NumberDirective),
  multi: true
};

@Directive({
  selector: '[razrooNumber]',
  providers: [NUMBER_VALIDATOR]
})
export class NumberDirective implements Validator {
  validate(c: AbstractControl): {[key: string]: any} {
    return number(c);
  }
}
