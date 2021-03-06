import {
  AbstractControl,
  FormGroup,
  ValidatorFn,
  ValidationErrors, NgForm
} from "@angular/forms";


export function forbiddenEmailValidator(email: string): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = control.value === email;
    return forbidden ? {'forbiddenEmail': {value: control.value}} : null
  };
}

export function sameAsValidator(controls: string[]): ValidatorFn  {
  return (control: FormGroup): ValidationErrors | null => {
    const compare = control.get(controls[0]);
    const compareTo = control.get(controls[1]);
    if (!compare || !compareTo) { return null; }
    return compare.value !== compareTo.value ?
        {sameAs: {value: control.value}} : null;
  }
}

export function validateInputs(form: NgForm): void {
  Object.keys(form.controls).forEach(controlName => {
    form.controls[controlName].markAsDirty();
  });
}

