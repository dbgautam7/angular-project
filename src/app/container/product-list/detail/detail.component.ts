import { Component, Input, inject } from '@angular/core'
import { ProductListComponent } from '../product-list.component'
import { Product } from '../../../models/product'
import { ActivatedRoute, RouterModule } from '@angular/router'
import { ProductService } from '../../../services/product.service'

@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './detail.component.html',
})
export class DetailComponent {
  @Input() productListComp: ProductListComponent

  selectedProduct: Product
  productId: number
  title: string

  productService: ProductService = inject(ProductService)
  activeRoute: ActivatedRoute = inject(ActivatedRoute)

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((data) => {
      this.productId = +data.get('id')
      this.selectedProduct = this.productService.products.find(
        (item) => item.id === this.productId,
      )
    })

    this.activeRoute.data.subscribe((val: any) => {
      this.title = val.title
    })

    this.activeRoute.fragment.subscribe((data) => console.log(data, 'dataaa'))
  }
}
