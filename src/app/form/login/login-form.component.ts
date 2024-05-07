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
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { GetApiService } from './../../services/api/get-api.service'
import { PostApiService } from '../../services/api/post-api.service'

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
  http: HttpClient = inject(HttpClient)
  authService: AuthService = inject(AuthService)
  getApiService: GetApiService = inject(GetApiService)
  postApiService: PostApiService = inject(PostApiService)

  // @ViewChildren('inputRef', {})
  @ViewChild('username') username: ElementRef
  // loginInputElements: QueryList<ElementRef>

  private fetchAllUsers() {
    this.getApiService.fetchData(
      'https://angular-project-3de0f-default-rtdb.firebaseio.com/users.json',
    )
  }

  handleLoggedIn() {
    this.postApiService.postData(
      'https://angular-project-3de0f-default-rtdb.firebaseio.com/users.json',
      this.reactiveForm.value,
    )
    // const headers = new HttpHeaders({ 'custom-header': '12345' })
    // this.http
    //   .post<{
    //     name: string
    //   }>(
    //     'https://angular-project-3de0f-default-rtdb.firebaseio.com/users.json',
    //     this.reactiveForm.value,
    //     { headers: headers },
    //   )
    //   .subscribe((res) => {
    //     if (Object.keys(res).length !== 0) {
    //       this.reactiveForm.reset()
    //     }
    //   })

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

  deleteUser(id: string = '-NxHI3Roghstu2icpWUY') {
    this.http
      .delete(
        `https://angular-project-3de0f-default-rtdb.firebaseio.com/users/${id}.json`,
      )
      .subscribe((res) => {
        console.log(res, 'res')
      })
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
    this.fetchAllUsers()
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
    this.reactiveForm.valueChanges.subscribe((value) => {})
    this.reactiveForm.get('username').statusChanges.subscribe((value) => {})
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
