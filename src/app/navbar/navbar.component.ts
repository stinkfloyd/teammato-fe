import { Component, OnInit } from '@angular/core'
import { CookieService } from 'ngx-cookie-service'
import { NavbarService } from '../navbar.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  loggedIn = false

  constructor(private cookie: CookieService, private navbar: NavbarService) { }

  ngOnInit() {
    const check = this.cookie.get('token')
    console.log('check: ', check)
    if (check === '') {
      console.log('no token')
      this.loggedIn = false
    } else {
      console.log('token')
      this.loggedIn = true
    }
  }

  OnChanges() {
    console.log('Changes!')
  }

}
