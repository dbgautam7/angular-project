import { Component, Input, inject } from '@angular/core'
import { ProductListComponent } from '../product-list.component'
import { Product } from '../../../models/product'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
})
export class DetailComponent {
  @Input() productListComp: ProductListComponent

  selectedProduct: Product
  productId: number

  activeRoute: ActivatedRoute = inject(ActivatedRoute)

  ngOnInit() {
    this.selectedProduct = this.productListComp.selectedProduct
    this.productId = this.activeRoute.snapshot.params(['id'])
  }
}
