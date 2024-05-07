import { Injectable, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class GetApiService {
  http: HttpClient = inject(HttpClient)
  data: any

  fetchData(url: string) {
    this.http
      .get(url)
      .pipe(
        map((res) => {
          let resData = []
          for (let key in res) {
            if (res.hasOwnProperty(key)) {
              resData.push({ ...res[key], id: key })
            }
          }
          return resData
        }),
      )
      .subscribe((resData) => {
        this.data = resData
        console.log(resData, 'resData')
      })
  }
}
