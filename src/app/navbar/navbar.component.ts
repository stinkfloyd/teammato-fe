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

  constructor(private cookie: CookieService, private auth: AuthService) {
    auth.sendLoggedInEvent.subscribe((event) => {
      console.log('loggedIn: ', this.loggedIn)
      this.changeLoggedIn()
      console.log('loggedIn: ', this.loggedIn)
    })
  }

  ngOnInit() {
    // const check = this.cookie.get('token')
    // console.log('check: ', check)
    // if (check === '') {
    //   console.log('no token')
    //   this.loggedIn = false
    // } else {
    //   console.log('token')
    //   this.loggedIn = true
    // }
  }

  changeLoggedIn() {
    this.loggedIn = !this.loggedIn
    return
  }

  OnChanges() {
    console.log('Changes!')
  }

}
