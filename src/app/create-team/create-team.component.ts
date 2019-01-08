import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { HttpHeaders } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service'
import { UserService } from '../user-service.service'
import { NgForm } from '@angular/forms'


@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss']
})
export class CreateTeamComponent implements OnInit {

  formData = {
    name: '',
  }

  create(form: NgForm): void {
    this.user.createTeam(form.value)
      .subscribe(result => {
        this.goTo('profile')
      }, error => {
        console.log('error: ', error)
      })
  }

  goTo(path): void {
    this.router.navigateByUrl(path)
  }
  constructor(private user: UserService, private router: Router) { }

  ngOnInit() {
  }

}
