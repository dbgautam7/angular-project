import { Component } from '@angular/core'
import { UserService } from '../services/user.service'
import { NgFor } from '@angular/common'
import { Observable } from 'rxjs'
import { error } from 'console'

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgFor],
  templateUrl: './user.component.html',
})
export class UserComponent {
  constructor(private userService: UserService) {}
  userList = this.userService.getAllUsers()

  data: any[] = []

  //observable or event emitter
  // myObservable = new Observable((observer) => {
  //   observer.next([1, 2, 3, 4, 5, 6, 7])
  // })

  myObservable = new Observable((observer) => {
    observer.next(1)
    observer.next(2)
    observer.next(3)
    observer.next(4)
    setTimeout(() => {
      observer.error(new Error('Something went wrong!!'))
    }, 1000)
    setTimeout(() => {
      observer.complete()
    }, 1000)
  })

  //observer or event listener
  // next, error, complete
  // handleAsyncData() {
  //   this.myObservable.subscribe((value: any) => {
  //     this.data = value
  //   })
  // }
  // handleAsyncData() {
  //   this.myObservable.subscribe(
  //     (value: any) => {
  //       this.data.push(value)
  //     },
  //     (err) => {
  //       alert(err.message)
  //     },
  //     () => {
  //       alert('Completion')
  //     },
  //   )
  // }
  handleAsyncData() {
    this.myObservable.subscribe({
      next: (value: any) => {
        this.data.push(value)
      },
      error(err) {
        alert(err.message)
      },
      complete() {
        alert('Completion')
      },
    })
  }
}
