import { AbstractControl } from "@angular/forms";

export function MobNoValidation(control: AbstractControl): {[key:string]: any} | null {
    const validator =   /^\d{10}$/.test(control.value);
    return validator ? null:{'validation': {value: control.value}};
}