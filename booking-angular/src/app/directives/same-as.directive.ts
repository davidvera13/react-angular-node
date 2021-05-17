import {
  Directive,
  Input
} from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  FormGroup,
  Validator
} from "@angular/forms";
import {sameAsValidator} from "../validators/functions";

@Directive({
  selector: '[sameAs]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: SameAsDirective,
    multi: true
  }]
})
export class SameAsDirective implements Validator{
  @Input('sameAs') controls: string[];

  validate(control: FormGroup): ValidationErrors | null {
    return (this.controls && this.controls.length === 2) ?
      sameAsValidator(this.controls)(control) : null;
  }

  constructor() { }

}
