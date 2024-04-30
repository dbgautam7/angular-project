import { ActivatedRoute, Router, RouterModule } from '@angular/router'
import { Component, OnInit, inject } from '@angular/core'
import { SearchComponent } from '../search/search.component'
import { NgFor } from '@angular/common'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [SearchComponent, NgFor, RouterModule],
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  navbarItems = [
    { name: 'Home', link: '' },
    { name: 'Products', link: 'products' },
    { name: 'About', link: 'about' },
    { name: 'Contact', link: 'contact' },
  ]

  router: Router = inject(Router)
  activePath: ActivatedRoute = inject(ActivatedRoute)

  handleNavigation() {
    this.router.navigate([''], { relativeTo: this.activePath })
    this.router.navigateByUrl('')
  }

  ngOnInit(): void {
    console.log(this.activePath, 'Acti')
  }
}
