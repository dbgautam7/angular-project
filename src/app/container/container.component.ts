import { Component, ViewChild } from '@angular/core'
import { ProductListComponent } from './product-list/product-list.component'
import { LocalSearchComponent } from './localSearch/local-search.component'
import { DetailComponent } from './product-list/detail/detail.component'
import { NgIf } from '@angular/common'
import { TestComponent } from './test/testing.component'

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [
    ProductListComponent,
    LocalSearchComponent,
    DetailComponent,
    NgIf,
    TestComponent,
  ],
  templateUrl: './container.component.html',
})
export class ContainerComponent {
  searchText: string = ''

  setSearchText(value: string) {
    this.searchText = value
  }

  @ViewChild(ProductListComponent, { static: true })
  productListComponent: ProductListComponent
}
