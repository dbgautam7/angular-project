import { Component, EventEmitter, Output, Input } from '@angular/core'
import { Task } from '../../models/task'

@Component({
  selector: 'app-task-details',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
  standalone: true,
})
export class TaskDetailsComponent {
  @Output()
  CloseDetailView: EventEmitter<boolean> = new EventEmitter<boolean>()

  @Input() currentTask: Task | null = null

  OnCloseTaskDetail() {
    this.CloseDetailView.emit(false)
  }
}
