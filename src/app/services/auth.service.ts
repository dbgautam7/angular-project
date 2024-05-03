import { Injectable, inject } from '@angular/core'
import { UserService } from './user.service'
import { Router } from '@angular/router'

@Injectable({ providedIn: 'root' })
export class AuthService {
  isLoggedIn: boolean = false
  router: Router = inject(Router)

  constructor(private userService: UserService) {}

  login(username: string) {
    console.log(username, 'username')
    const validUser = this.userService.users.find((user) =>
      user.username === username ? true : false,
    )
    console.log(validUser, 'validUser')
    if (validUser === undefined) {
      this.isLoggedIn = false
    } else this.isLoggedIn = true
    return validUser
  }

  logout() {
    this.isLoggedIn = false
    this.router.navigateByUrl('/login')
  }
}
