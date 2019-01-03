import { Component, OnInit } from '@angular/core'
import { formatDate } from '@angular/common'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {

  formData = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
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
    this.httpClient.post('http://localhost:3000/users', newUser)
      .subscribe(data => {
        console.log('POST Successful ', data)
        this.router.navigate(['/'])
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
