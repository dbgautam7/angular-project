import { Injectable, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  http: HttpClient = inject(HttpClient)
  logError(data: { statusCode: number; errorMessage: string; datetime: Date }) {
    this.http
      .post(
        'https://angular-project-3de0f-default-rtdb.firebaseio.com/log.json',
        data,
      )
      .subscribe()
  }

  fetchErrors() {
    this.http
      .get('https://angular-project-3de0f-default-rtdb.firebaseio.com/log.json')
      .subscribe((data) => {
        console.log(data, 'data===22 in logger service')
      })
  }
}
