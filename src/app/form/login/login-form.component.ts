import { NgIf, NgTemplateOutlet } from '@angular/common'
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core'
import { DisableButtonDirective } from '../../customDirectives/disable-button.directive'

@Component({
  selector: 'login-form',
  standalone: true,
  imports: [NgTemplateOutlet, NgIf, DisableButtonDirective],
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  constructor() {}

  searchText: string = ''
  buttonState: boolean = false

  setSearchText(value: string) {
    this.searchText = value
  }

  @ViewChildren('inputRef', {})
  loginInputElements: QueryList<ElementRef>

  log() {
    this.loginInputElements.map((item) => {
      console.log(item.nativeElement.value, 'item')
    })
  }

  toggleButton() {
    this.buttonState = !this.buttonState
  }
}
