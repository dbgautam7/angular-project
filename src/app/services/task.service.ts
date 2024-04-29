import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class TaskService {
  createTask = new Subject<string>()

  onCreateTask(value: string) {
    this.createTask.next(value)
  }
}
