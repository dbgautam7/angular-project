import { Component } from '@angular/core'
import { FormsModule, NgModel } from '@angular/forms'

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
})
export class SearchComponent {
  searchText: string = ''
}
