import { Component } from '@angular/core'
import { ProductListComponent } from './product-list/product-list.component'

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './container.component.html',
})
export class ContainerComponent {}
