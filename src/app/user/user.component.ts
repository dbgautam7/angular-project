import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core'
import { UserService } from '../services/user.service'
import { NgFor } from '@angular/common'
import { Observable, filter, from, fromEvent, map } from 'rxjs'

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgFor],
  templateUrl: './user.component.html',
})
export class UserComponent implements AfterViewInit {
  constructor(private userService: UserService) {}
  userList = this.userService.getAllUsers()

  data: any[] = []

  //observable or event emitter
  // myObservable = new Observable((observer) => {
  //   observer.next([1, 2, 3, 4, 5, 6, 7])
  // })

  mapObservable = from([2, 4, 6, 8, 10])

  mappedData = this.mapObservable.pipe(map((val) => val * 5))
  filteredData = this.mappedData.pipe(filter((val) => val % 4 === 0))

  mappedFilteredData = this.mapObservable.pipe(
    map((mappedVal) => mappedVal * 5),
    filter((filteredVal) => filteredVal % 4 === 0),
  )

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

  promiseData = new Promise((resolve, reject) => {
    resolve([1, 4, 8])
  })

  newObservable = from(this.promiseData)

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
    this.mappedFilteredData.subscribe({
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

  @ViewChild('createButton')
  createButton: ElementRef

  createButtonObservable: any

  buttonClicked() {
    let count: number = 1
    this.createButtonObservable = fromEvent(
      this.createButton.nativeElement,
      'click',
    ).subscribe(() => {
      this.showItem(count++)
    })
  }

  ngAfterViewInit(): void {
    this.buttonClicked()
  }

  showItem(count: number) {
    let div = document.createElement('div')
    div.innerText = 'Text' + count
    document.getElementById('container').appendChild(div)
  }
}
