import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core'

@Directive({
  selector: '[setBackground]',
  standalone: true,
})
export class SetBackgroundColorDirective implements OnInit {
  @Input('setBackground') textColor: string

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) {
    // this.element.nativeElement.style.backgroundColor = 'red'
    // this.element.nativeElement.style.color = 'yellow'
  }
  ngOnInit(): void {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'green',
    )

    this.renderer.setStyle(this.element.nativeElement, 'color', this.textColor)
    this.renderer.setStyle(this.element.nativeElement, 'borderRadius', '10px')
    this.renderer.setStyle(this.element.nativeElement, 'padding', '4px 10px')
  }
}
