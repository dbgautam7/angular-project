import { Component, Input, NgModule } from '@angular/core'
import { ProductListComponent } from '../product-list.component'
import { Product } from '../../../models/product'

@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
})
export class DetailComponent {
  @Input() productListComp: ProductListComponent

  selectedProduct: Product

  ngOnInit() {
    this.selectedProduct = this.productListComp.selectedProduct
  }
}
