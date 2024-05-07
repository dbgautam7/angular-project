import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core'
import { Student } from '../../models/students'
import {
  AsyncPipe,
  CurrencyPipe,
  DatePipe,
  NgClass,
  NgFor,
  NgIf,
  PercentPipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common'
import { PercentagePipe } from '../../pipes/percentage.pipe'
import { StudentService } from '../../services/students.service'
import { ConfirmDeleteComponent } from './confirmDelete/confirm-delete.component'
import { FormsModule, NgForm } from '@angular/forms'

@Component({
  selector: 'app-student',
  templateUrl: './students.component.html',
  standalone: true,
  imports: [
    AsyncPipe,
    PercentagePipe,
    NgIf,
    NgFor,
    DatePipe,
    UpperCasePipe,
    CurrencyPipe,
    PercentPipe,
    TitleCasePipe,
    ConfirmDeleteComponent,
    FormsModule,
    NgClass,
  ],
  styleUrl: './students.component.css',
})
export class StudentComponent implements OnInit {
  studentService: StudentService = inject(StudentService)

  isEditing: boolean = false
  isInserting: boolean = false
  stdIdToEdit: number

  students: Student[]
  totalMarks: number
  filterText: string = 'All'

  showDeleteComponent: boolean = false
  studentToDelete: Student

  genders = [
    { id: '1', value: 'male' },
    { id: '1', value: 'female' },
    { id: '3', value: 'others' },
  ]

  totalStudents = new Promise((resolve, rejection) => {
    setTimeout(() => {
      resolve(this.students?.length)
    }, 2000)
  })

  //PROPERTIES FOR INSERTING
  @ViewChild('name') Name: ElementRef
  @ViewChild('gender') Gender: ElementRef
  @ViewChild('dob') Dob: ElementRef
  @ViewChild('course') Course: ElementRef
  @ViewChild('marks') Marks: ElementRef
  @ViewChild('fee') Fee: ElementRef

  //PROPERTIES FOR EDITING
  @ViewChild('editName') editName: ElementRef
  @ViewChild('editGender') editGender: ElementRef
  @ViewChild('editDob') editDob: ElementRef
  @ViewChild('editCourse') editCourse: ElementRef
  @ViewChild('editMarks') editMarks: ElementRef
  @ViewChild('editFee') editFee: ElementRef

  ngOnInit() {
    this.students = this.studentService.filterStudentByGender(this.filterText)
    this.totalMarks = this.studentService.totalMarks
  }

  OnFilterValueChanged(event: any) {
    let selectedValue = event.target.value
    this.filterText = selectedValue
    this.students = this.studentService.filterStudentByGender(selectedValue)
  }

  OnInsertClicked() {
    this.isInserting = true
  }
  OnInsertCancelled() {
    this.isInserting = false
  }
  OnInsertSaved() {
    this.studentService.CreateStudent(
      this.Name.nativeElement.value,
      this.Gender.nativeElement.value,
      this.Dob.nativeElement.value,
      this.Course.nativeElement.value,
      this.Marks.nativeElement.value,
      this.Fee.nativeElement.value,
    )
    this.students = this.studentService.students
    this.isInserting = false
    this.students = this.studentService.filterStudentByGender(this.filterText)
  }

  OnEditClicked(stdId: number) {
    this.isEditing = true
    this.stdIdToEdit = stdId
  }
  OnEditCancelled() {
    this.isEditing = false
  }

  OnEditSaved(student: Student) {
    student.name = this.editName.nativeElement.value
    student.gender = this.editGender.nativeElement.value
    student.dob = this.editDob.nativeElement.value
    student.course = this.editCourse.nativeElement.value
    student.marks = this.editMarks.nativeElement.value
    student.fee = this.editFee.nativeElement.value

    this.isEditing = false
    this.students = this.studentService.filterStudentByGender(this.filterText)
  }
  onDeleteClicked(student: Student) {
    this.showDeleteComponent = true
    this.studentToDelete = student
  }

  OnStudentDeletionConfirmed(value: any) {
    this.showDeleteComponent = false
    if (value) {
      let index = this.studentService.students.indexOf(this.studentToDelete)
      console.log(index, 'index')
      this.studentService.students.splice(index, 1)
    }
  }

  @ViewChild('sampleForm') form: NgForm

  OnFormSubmitted() {
    console.log(
      'formSubmitted',
      this.form,
      this.form.value,
      this.form.controls['password']?.value,
      // this.form.control.patchValue({ selectedGender: 'others' }),
    )
    // this.form.reset()
  }

  patchGender() {
    // this.form.form.controls?.['gender'].patchValue('others')
    this.form.form.patchValue({ gender: 'others' })
    this.form.form.patchValue({ pass: true })
  }
}
