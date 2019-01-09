import { Injectable, EventEmitter, Output } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { catchError, tap } from 'rxjs/internal/operators'
import { CookieService } from 'ngx-cookie-service'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private cookie: CookieService, private router: Router) { }

  createTeam(newTeam): Observable<any> {
    // this gets the user
    return this.http.post<any>('http://localhost:3000/teams', newTeam, { withCredentials: true }).pipe(
      tap((result) => {
        return result
      })
    )
  }

  joinTeam(teamName): Observable<any> {
    // this gets the user
    return this.http.post<any>('http://localhost:3000/teams/join', teamName, { withCredentials: true }).pipe(
      tap((result) => {
        console.log('result: ', result)
        return result
      })
    )
  }
}
