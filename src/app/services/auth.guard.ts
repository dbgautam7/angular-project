import { CanActivateFn, Router } from '@angular/router'
import { AuthService } from './auth.service'
import { inject } from '@angular/core'

export const AuthGuard: CanActivateFn = (route, state) => {
  console.log(route, state.url, 'routeGuard')
  const authService: AuthService = inject(AuthService)
  const router: Router = inject(Router)

  if (authService.isLoggedIn) {
    return true
  } else {
    router.navigateByUrl('/login')
  }

  return true
}
