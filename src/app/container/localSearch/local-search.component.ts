import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'local-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './local-search.component.html',
})
export class LocalSearchComponent implements OnChanges, OnInit, DoCheck {
  searchText: string = ''

  @Input() inputValue: string

  @Output() searchTextChanged: EventEmitter<string> = new EventEmitter<string>()

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.searchText)
  }

  //for reference to html dom element
  setSearchText(ele: HTMLInputElement) {
    this.searchText = ele.value
    this.searchTextChanged.emit(this.searchText)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes, 'changes', this.inputValue)
  }
  ngOnInit(): void {
    console.log('init called', this.inputValue)
  }

  ngDoCheck(): void {
    console.log('ng do checked called')
  }
}
