import { Routes } from '@angular/router'
import { LocalSearchComponent } from '../container/localSearch/local-search.component'
import { ProductListComponent } from '../container/product-list/product-list.component'
import { ShowTaskComponent } from '../task/showTask/showTask.component'
import { TestComponent } from '../container/test/testing.component'
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component'
import { DetailComponent } from '../container/product-list/detail/detail.component'

export const routes: Routes = [
  { path: 'home', redirectTo: '' },
  { path: '', component: LocalSearchComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: DetailComponent },
  { path: 'about', component: ShowTaskComponent },
  { path: 'contact', component: TestComponent },
  { path: '**', component: PageNotFoundComponent },
]
