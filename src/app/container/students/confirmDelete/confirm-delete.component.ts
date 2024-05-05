import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Student } from '../../../models/students'

@Component({
  selector: 'confirm-delete',
  standalone: true,
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css'],
})
export class ConfirmDeleteComponent implements OnInit {
  constructor() {}

  @Input() studentToDelete: Student

  @Output()
  OnConfirmation: EventEmitter<boolean> = new EventEmitter<boolean>()

  ngOnInit() {}

  OnConfirmationBtmClicked(value: boolean) {
    console.log(value)
    this.OnConfirmation.emit(value)
  }
}
