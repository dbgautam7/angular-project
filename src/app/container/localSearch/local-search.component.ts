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
import { FocusDirective } from '../../customDirectives/focus.component'
import { NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common'
import { IfDirective } from '../../customDirectives/if.directive'
import { SearchService } from '../../services/search.service'

@Component({
  selector: 'local-search',
  standalone: true,
  imports: [
    FormsModule,
    FocusDirective,
    NgIf,
    IfDirective,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
  ],
  templateUrl: './local-search.component.html',
  // providers: [SearchService],
})
export class LocalSearchComponent implements OnChanges, OnInit, DoCheck {
  searchText: string = ''
  getDay: number = new Date().getDay()

  @Input() inputValue: string

  @Output() searchTextChanged: EventEmitter<string> = new EventEmitter<string>()

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.searchText)
  }

  constructor(private searchService: SearchService) {}

  //for reference to html dom element
  setSearchText(ele: HTMLInputElement) {
    this.searchService.handleSearch()
    // let searchService = new SearchService()
    // searchService.handleSearch()
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
