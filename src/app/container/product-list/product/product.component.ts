import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
  signal,
} from '@angular/core'
import { Product } from '../../../models/product'
import { SetBackgroundColorDirective } from '../../../customDirectives/backgroundColor.directive'
import { HighlightDirective } from '../../../customDirectives/highlight.directive'
import { Router } from '@angular/router'
import { PercentPipe } from '@angular/common'
import { PercentagePipe } from '../../../pipes/percentage.pipe'

@Component({
  selector: 'single-product',
  standalone: true,
  imports: [
    SetBackgroundColorDirective,
    HighlightDirective,
    PercentPipe,
    PercentagePipe,
  ],
  templateUrl: './product.component.html',
})
export class ProductComponent {
  @Input()
  product: Product

  @Input() stockCount: number

  @Output() decrementCartCount: EventEmitter<any> = new EventEmitter<any>()
  @Output() incrementCartCount: EventEmitter<any> = new EventEmitter<any>()
  @Output() onNameChange: EventEmitter<any> = new EventEmitter<any>()

  router: Router = inject(Router)

  handleNavigation() {
    this.router.navigateByUrl(`/products/${this.product.id}`)
  }

  decrementCart() {
    this.decrementCartCount.emit()
  }

  incrementCart() {
    this.incrementCartCount.emit()
  }
}
