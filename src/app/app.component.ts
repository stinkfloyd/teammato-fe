import { Component } from '@angular/core'
import { SidebarService } from './sidebar.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  _opened = false
  title = 'Teammato'

  constructor(private sidebar: SidebarService) {
    sidebar.sidebarToggle.subscribe(() => {
      this._toggleSidebar()
    })
  }

  _toggleSidebar() {
    this._opened = !this._opened
  }
}
