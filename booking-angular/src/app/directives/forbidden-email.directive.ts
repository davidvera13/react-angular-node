import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";
import {forbiddenEmailValidator} from "../validators/functions";

@Directive({
  selector: '[forbiddenEmail]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ForbiddenEmailDirective,
    multi: true
  }]
})
export class ForbiddenEmailDirective implements Validator{
  @Input('forbiddenEmail') forbiddenEmail: string;

  validate(control: AbstractControl): ValidationErrors | null {
    return this.forbiddenEmail ?
      forbiddenEmailValidator(this.forbiddenEmail)(control) : null;
  }

  constructor() { }

}
