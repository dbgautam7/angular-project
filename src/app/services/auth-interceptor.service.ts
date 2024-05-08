// import { Injectable } from '@angular/core'
// import {
//   HttpInterceptor,
//   HttpRequest,
//   HttpHandler,
//   HttpEventType,
// } from '@angular/common/http'
// import { tap } from 'rxjs/operators'

// // @Injectable({ providedIn: 'root' })
// export class AuthInterceptorService implements HttpInterceptor {
//   intercept(req: HttpRequest<any>, next: HttpHandler) {
//     console.log('Auth Interceptor called!')
//     const authToken = '1qazxsw23edcvfr45tgnhy67ujmki8'
//     const modifiedReq = req.clone({
//       setHeaders: {
//         Authorization: `Bearer ${authToken}`,
//       },
//       //   headers: req.headers.append('auth', 'abcxyz'),
//     })
//     return next.handle(modifiedReq).pipe(
//       tap((event) => {
//         if (event.type === HttpEventType.Response) {
//           console.log('Response has arrived. Response data: ')
//           console.log(event.body)
//         }
//       }),
//     )
//   }
// }

import { HttpInterceptorFn } from '@angular/common/http'

export const AuthInterceptorService: HttpInterceptorFn = (req, next) => {
  console.log('interceptor called')
  //   const authToken = '1qazxsw23edcvfr45tgnhy67ujmki8'

  // Clone the request and add the authorization header
  const authReq = req.clone({
    setHeaders: {
      //   Authorization: `Bearer ${authToken}`,
      auth: 'abcdefghijklmnopqrstuvwxyz',
    },
  })

  // Pass the cloned request with the updated header to the next handler
  return next(authReq)
}
