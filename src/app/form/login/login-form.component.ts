import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common'
import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  inject,
} from '@angular/core'
import { DisableButtonDirective } from '../../customDirectives/disable-button.directive'
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { noSpaceAllowed } from '../../validators/noSpaceAllowed.validator'

@Component({
  selector: 'login-form',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    NgIf,
    NgFor,
    DisableButtonDirective,
    ReactiveFormsModule,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent implements OnInit {
  searchText: string = ''
  buttonState: boolean = false
  title: any

  setSearchText(value: string) {
    this.searchText = value
  }
  route: Router = inject(Router)
  authService: AuthService = inject(AuthService)

  // @ViewChildren('inputRef', {})
  @ViewChild('username') username: ElementRef
  // loginInputElements: QueryList<ElementRef>

  handleLoggedIn() {
    console.log(this.reactiveForm, 'reactiveForm')
    // const userName = this.username.nativeElement.value
    // console.log(userName, 'userName')
    // const user = this.authService.login(userName)
    // console.log(user, 'user')
    // if (user === undefined) {
    //   alert('Sorry,Unable to Logged In')
    // } else alert('Login Successfully')
    // this.loginInputElements.map((item) => {
    //   console.log(item.nativeElement.value, 'item')
    // })
  }

  toggleButton() {
    this.buttonState = !this.buttonState
  }

  handleLogout() {
    this.authService.logout()
  }

  reactiveForm: FormGroup

  // constructor(private fb: FormBuilder) {
  //   this.reactiveForm = this.fb.group({
  //     username: ['', Validators.required],
  //     password: ['', Validators.required],
  //   })
  // }

  ngOnInit(): void {
    // this.title = history.state
    // console.log(this.title, 'title')
    this.reactiveForm = new FormGroup(
      {
        username: new FormControl(null, [
          Validators.required,
          Validators.minLength(2),
          noSpaceAllowed,
        ]),
        password: new FormControl(null, Validators.required),
        skills: new FormArray([
          new FormControl(null),
          new FormControl(null),
          new FormControl(null),
        ]),
        experience: new FormArray([]),
      },
      { updateOn: 'change' },
    )
    console.log(this.reactiveForm, 'reactiveForm')
  }

  addSkill(e: Event) {
    e.preventDefault()
    ;(<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null))
  }

  deleteSkill(index: number) {
    ;(<FormArray>this.reactiveForm.get('skills')).removeAt(index)
  }

  AddExperience() {
    const formGroup = new FormGroup({
      company: new FormControl(null),
      position: new FormControl(null),
      totalExp: new FormControl(null),
      start: new FormControl(null),
      end: new FormControl(null),
    })

    ;(<FormArray>this.reactiveForm.get('experience')).push(formGroup)
  }

  DeleteExperience(index: number) {
    const frmArray = <FormArray>this.reactiveForm.get('experience')
    frmArray.removeAt(index)
  }
}
