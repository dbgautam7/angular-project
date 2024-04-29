import { Component, ViewEncapsulation } from '@angular/core'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { ContainerComponent } from './container/container.component'
import { SignUpComponent } from './auth/signup/signup.component'
import { LoginFormComponent } from './form/login/login-form.component'
import { SearchService } from './services/search.service'
import { UserComponent } from './user/user.component'
import { FormsModule } from '@angular/forms'
import { UserService } from './services/user.service'
import { LoggerService } from './services/logger.service'
import { ShowTaskComponent } from './task/showTask/showTask.component'
import { CreateTaskComponent } from './task/createTask/createTask.component'
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
  ],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  providers: [SearchService, UserService, LoggerService],
})
export class AppComponent {
  constructor() {}

  title = 'Angular Project'
}
