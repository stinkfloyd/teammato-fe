import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { HttpHeaders } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss']
})
export class LogInFormComponent implements OnInit {

  formData = {
    username: '',
    password: ''
  }



  error = false
  errorMessage = ''

  onSubmit() {
    this.error = false
    const newUser = {}
    Object.keys(this.formData).forEach((key) => {
      if (key === 'confirmPassword') { return }
      newUser[key] = this.formData[key]
    })
    const httpPostOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true,
    }

    this.httpClient.post('http://localhost:3000/login', newUser, httpPostOptions)
      .subscribe(async (data) => {
        console.log('POST Successful ', data)
        const dataString = await JSON.stringify(data)
        this.cookie.set('token', dataString)
        this.router.navigate(['/profile'])
      })
  }

  constructor(private httpClient: HttpClient, private router: Router, private cookie: CookieService) { }

  ngOnInit() {
  }

}
