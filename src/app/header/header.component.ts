import { ActivatedRoute, Router, RouterModule } from '@angular/router'
import { Component, OnInit, inject } from '@angular/core'
import { SearchComponent } from '../search/search.component'
import { NgFor, NgIf } from '@angular/common'
import { AuthService } from '../services/auth.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [SearchComponent, NgFor, RouterModule, NgIf],
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
  authService: AuthService = inject(AuthService)
  activePath: ActivatedRoute = inject(ActivatedRoute)

  handleNavigation() {
    this.router.navigate([''], { relativeTo: this.activePath })
    this.router.navigateByUrl('')
  }

  ngOnInit(): void {}
}
