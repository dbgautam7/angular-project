import { Routes } from '@angular/router'
import { LocalSearchComponent } from '../container/localSearch/local-search.component'
import { ProductListComponent } from '../container/product-list/product-list.component'
import { ShowTaskComponent } from '../task/showTask/showTask.component'
import { TestComponent } from '../container/test/testing.component'
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component'
import { DetailComponent } from '../container/product-list/detail/detail.component'
import { LoginFormComponent } from '../form/login/login-form.component'
import { AuthGuard } from '../services/auth.guard'

export const routes: Routes = [
  { path: 'home', redirectTo: '' },
  { path: '', component: LocalSearchComponent },
  {
    path: 'products',
    component: ProductListComponent,
    canDeactivate: [
      (comp: ProductListComponent) => {
        return true
      },
    ],
  },
  // {
  //   path: 'products',
  //   component: ProductListComponent,
  //   children: [
  //     {
  //       path: ':id',
  //       component: DetailComponent,
  //     },
  //   ],
  // },

  {
    path: 'products/:id',
    component: DetailComponent,
    data: { title: 'Details Page' },
  },
  { path: 'about', component: ShowTaskComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: TestComponent },
  { path: 'login', component: LoginFormComponent },

  { path: '**', component: PageNotFoundComponent },
]
