import { NgIf, NgTemplateOutlet } from '@angular/common'
import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  inject,
} from '@angular/core'
import { DisableButtonDirective } from '../../customDirectives/disable-button.directive'
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'login-form',
  standalone: true,
  imports: [NgTemplateOutlet, NgIf, DisableButtonDirective],
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent implements OnInit {
  constructor() {}

  searchText: string = ''
  buttonState: boolean = false
  title: any

  setSearchText(value: string) {
    this.searchText = value
  }
  route: Router = inject(Router)
  authService: AuthService = inject(AuthService)

  // @ViewChildren('inputRef', {})
  @ViewChild('username') username: ElementRef
  // loginInputElements: QueryList<ElementRef>

  handleLoggedIn() {
    const userName = this.username.nativeElement.value
    console.log(userName, 'userName')
    const user = this.authService.login(userName)
    console.log(user, 'user')
    if (user === undefined) {
      alert('Sorry,Unable to Logged In')
    } else alert('Login Successfully')
    // this.loginInputElements.map((item) => {
    //   console.log(item.nativeElement.value, 'item')
    // })
  }

  toggleButton() {
    this.buttonState = !this.buttonState
  }

  handleLogout() {
    this.authService.logout()
  }

  ngOnInit(): void {
    this.title = history.state
    console.log(this.title, 'title')
  }
}
