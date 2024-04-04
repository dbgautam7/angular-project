import { Component, EventEmitter, Output } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'local-search',
  standalone: true,
  imports: [FormsModule],
  template:
    '<input class="ps-2 py-1 mb-4 rounded-md bg-gray-200 outline-blue-400" type="text" [(ngModel)]="searchText" (input)="onSearchTextChanged()" placeholder="Search.." />',
})
export class LocalSearchComponent {
  searchText: string = ''

  @Output() searchTextChanged: EventEmitter<string> = new EventEmitter<string>()

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.searchText)
  }
}
