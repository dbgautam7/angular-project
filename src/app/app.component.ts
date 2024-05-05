import {
  Component,
  NgModule,
  OnInit,
  ViewEncapsulation,
  inject,
} from '@angular/core'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { ContainerComponent } from './container/container.component'
import { SignUpComponent } from './auth/signup/signup.component'
import { LoginFormComponent } from './form/login/login-form.component'
import { SearchService } from './services/search.service'
import { UserComponent } from './user/user.component'
import { UserService } from './services/user.service'
import { LoggerService } from './services/logger.service'
import { ShowTaskComponent } from './task/showTask/showTask.component'
import { CreateTaskComponent } from './task/createTask/createTask.component'
import {
  Event,
  NavigationEnd,
  NavigationStart,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router'
import { LoaderComponent } from './loader/loader.component'
import { NgIf } from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContainerComponent,
    SignUpComponent,
    LoginFormComponent,
    UserComponent,
    ShowTaskComponent,
    CreateTaskComponent,
    RouterModule,
    RouterOutlet,
    LoaderComponent,
    NgIf,
  ],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  providers: [SearchService, UserService, LoggerService],
})
export class AppComponent implements OnInit {
  constructor() {}
  title = 'Angular Project'
  showLoader: boolean = false

  router: Router = inject(Router)
  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.showLoader = true
      }
      if (event instanceof NavigationEnd) {
        this.showLoader = false
      }
    })
  }
}
