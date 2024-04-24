import { Component, NgModule, ViewChild } from '@angular/core'
import { ProductListComponent } from './product-list/product-list.component'
import { LocalSearchComponent } from './localSearch/local-search.component'
import { DetailComponent } from './product-list/detail/detail.component'
import { NgIf } from '@angular/common'
import { TestComponent } from './test/testing.component'
import { UserService } from '../services/user.service'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [
    ProductListComponent,
    LocalSearchComponent,
    DetailComponent,
    NgIf,
    TestComponent,
    FormsModule,
  ],
  templateUrl: './container.component.html',
})
export class ContainerComponent {
  searchText: string = ''

  name: string = ''
  gender: string = 'male'
  age: number = null
  isStudent: boolean = true

  constructor(private userService: UserService) {}

  handleCreateNewUser() {
    this.userService.createUser(
      this.name,
      this.gender,
      this.age,
      this.isStudent,
    )
  }

  setSearchText(value: string) {
    this.searchText = value
  }

  @ViewChild(ProductListComponent, { static: true })
  productListComponent: ProductListComponent
}
