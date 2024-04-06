import { Component } from '@angular/core'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { ContainerComponent } from './container/container.component'
import { SignUpComponent } from './auth/signup/signup.component'
import { LoginFormComponent } from './form/login/login-form.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContainerComponent,
    SignUpComponent,
    LoginFormComponent,
  ],
  standalone: true,
})
export class AppComponent {
  constructor() {}

  title = 'Angular Project'
}
