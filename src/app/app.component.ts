import { Component } from '@angular/core'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { ProductListComponent } from './product-list/product-list.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ProductListComponent,
  ],
  standalone: true,
})
export class AppComponent {
  title = 'Angular Project'
}
