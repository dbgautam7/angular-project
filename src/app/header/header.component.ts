import { Component } from '@angular/core'
import { SearchComponent } from '../search/search.component'
import { NgFor } from '@angular/common'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [SearchComponent, NgFor],
})
export class HeaderComponent {
  navbarItems = [
    { name: 'Home', link: '/' },
    { name: 'Products', link: '/products' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
  ]
}
