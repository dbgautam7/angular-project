import { Component } from '@angular/core'
import { SearchComponent } from '../search/search.component'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [SearchComponent],
})
export class HeaderComponent {}
