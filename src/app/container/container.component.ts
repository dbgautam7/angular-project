import { Component } from '@angular/core'
import { ProductListComponent } from './product-list/product-list.component'
import { LocalSearchComponent } from './localSearch/local-search.component'

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [ProductListComponent, LocalSearchComponent],
  templateUrl: './container.component.html',
})
export class ContainerComponent {
  searchText: string = ''

  setSearchText(value: string) {
    console.log(value, 'value')
    this.searchText = value
  }
}
