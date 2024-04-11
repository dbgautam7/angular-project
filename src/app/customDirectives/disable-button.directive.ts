import { Directive, ElementRef, Input, Renderer2 } from '@angular/core'

@Directive({
  selector: '[disableButton]',
  standalone: true,
})
export class DisableButtonDirective {
  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) {}

  @Input('disableButton') set disableButton(disable: boolean) {
    if (disable) {
      this.renderer.setStyle(
        this.element.nativeElement,
        'border',
        '1px solid red',
      )
      this.renderer.setStyle(this.element.nativeElement, 'borderRadius', '4px')
      this.renderer.setStyle(this.element.nativeElement, 'padding', '4px 16px')
    }
  }
}
