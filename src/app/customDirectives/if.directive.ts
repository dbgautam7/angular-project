import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core'

@Directive({
  selector: '[display]',
  standalone: true,
})
export class IfDirective {
  constructor(
    private view: TemplateRef<any>,
    private template: ViewContainerRef,
  ) {}

  @Input() set display(condition: boolean) {
    condition
      ? this.template.createEmbeddedView(this.view)
      : this.template.clear()
  }
}
