import { Directive, HostBinding, HostListener } from '@angular/core'

@Directive({
  selector: '[inputFocus]',
  standalone: true,
})
export class FocusDirective {
  constructor() {}

  @HostBinding('value') inputValue: string = 'wa'

  @HostListener('focus') logValue() {
    console.log(this.inputValue, 'inputValue')
  }
}
