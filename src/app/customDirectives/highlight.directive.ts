import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core'

@Directive({
  selector: '[buttonHighlight]',
  standalone: true,
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('gray')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('')
  }

  @HostBinding('style.color') textColor: string = 'white'

  @HostBinding('value') inputValue: string = 'wa'

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color
  }
}
