import { Component, EventEmitter, Output } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'local-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './local-search.component.html',
})
export class LocalSearchComponent {
  searchText: string = ''

  @Output() searchTextChanged: EventEmitter<string> = new EventEmitter<string>()

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.searchText)
  }

  //for reference to html dom element
  setSearchText(ele: HTMLInputElement) {
    this.searchText = ele.value
    this.searchTextChanged.emit(this.searchText)
  }
}
