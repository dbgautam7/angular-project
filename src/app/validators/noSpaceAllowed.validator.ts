import { AbstractControl } from '@angular/forms'

export const noSpaceAllowed = (control: AbstractControl) => {
  if (control.value !== null && control.value.indexOf(' ') !== -1) {
    return { noSpaceAllowed: true }
  }
  return null
}
