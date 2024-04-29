import { Component, inject } from '@angular/core'
import { NgFor } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { TaskService } from '../../services/task.service'

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './createTask.component.html',
})
export class CreateTaskComponent {
  newTask: string = ''

  taskService: TaskService = inject(TaskService)

  handleCreateTask() {
    this.taskService.onCreateTask(this.newTask)
  }
}
