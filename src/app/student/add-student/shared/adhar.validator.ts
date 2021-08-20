import { AbstractControl } from "@angular/forms";

export function AdharNoValidation(control: AbstractControl): {[key:string]: any} | null {
    const validator =   /^\d{4}\s\d{4}\s\d{4}$/.test(control.value);
    return validator ? null:{'validation': {value: control.value}};
}