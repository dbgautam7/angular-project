import { Component, OnInit, inject } from '@angular/core'
import { TaskService } from '../../services/task.service'
import { NgFor } from '@angular/common'
import { ajax } from 'rxjs/ajax'
import { BehaviorSubject, Subject } from 'rxjs'

@Component({
  selector: 'app-show-task',
  standalone: true,
  imports: [NgFor],
  templateUrl: './showTask.component.html',
})
export class ShowTaskComponent implements OnInit {
  tasks: string[] = ['task 1', 'task 2', 'task 3', 'task 4']

  taskService: TaskService = inject(TaskService)

  ngOnInit(): void {
    this.taskService.createTask.subscribe((val: string) => {
      this.tasks.push(val)
    })

    const subject = new BehaviorSubject<number>(100)
    subject.subscribe((data) => console.log(data * 2))
  }
}
