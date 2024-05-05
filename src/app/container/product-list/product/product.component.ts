import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core'
import { Product } from '../../../models/product'
import { SetBackgroundColorDirective } from '../../../customDirectives/backgroundColor.directive'
import { HighlightDirective } from '../../../customDirectives/highlight.directive'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'single-product',
  standalone: true,
  imports: [SetBackgroundColorDirective, HighlightDirective],
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
