import { Injectable, inject } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({ providedIn: 'root' })
export class PostApiService {
  http: HttpClient = inject(HttpClient)

  postData(url: string, payload: any) {
    const headers = new HttpHeaders({ 'custom-header': '12345' })
    this.http.post(url, payload, { headers: headers }).subscribe((res) => {
      if (Object.keys(res).length !== 0) {
      }
    })
  }
}
