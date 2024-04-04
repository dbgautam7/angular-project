import { NgIf } from '@angular/common'
import { Component } from '@angular/core'

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  isSidebarOpen: boolean = false

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen
  }
}
