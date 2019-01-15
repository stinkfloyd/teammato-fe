import { Component, OnInit } from '@angular/core'
import { CookieService } from 'ngx-cookie-service'
import { NavbarService } from '../navbar.service'
import { AuthService } from '../auth.service'
import { logging } from 'protractor'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  loggedIn = false

  logoutClick = () => {
    this.cookie.set('token', '')
    this.changeLoggedIn()
  }

  constructor(private cookie: CookieService, private auth: AuthService) {
    auth.sendLoggedInEvent.subscribe(() => {
      this.changeLoggedIn()
    })
  }

  ngOnInit() {
    const check = this.cookie.get('token')
    if (check === '') {
      this.loggedIn = false
    } else {
      this.loggedIn = true
    }
  }

  changeLoggedIn() {
    this.loggedIn = !this.loggedIn
    return
  }
}
