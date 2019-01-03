import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

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
    this.httpClient.post('http://localhost:3000/login', newUser)
      .subscribe(data => {
        console.log('POST Successful ', data)
        this.router.navigate(['/profile'])
      }, error => {
        this.error = true
        console.log('POST ERROR ', error.error.constraint)
        switch (error.error.constraint) {
          case 'users_username_unique':
            this.errorMessage = `Username is already taken.`
            break
          case 'users_email_unique':
            this.errorMessage = `Email has already been used to sign up.`
            break
        }
      })
  }

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
  }

}
