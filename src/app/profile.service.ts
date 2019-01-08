import { Injectable, EventEmitter, Output } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { catchError, tap } from 'rxjs/internal/operators'
import { CookieService } from 'ngx-cookie-service'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  @Output() sendUserEvent: EventEmitter<any> = new EventEmitter()

  constructor(private http: HttpClient, private cookie: CookieService, private router: Router) { }

  getProfile(): Observable<any> {
    // this gets the user
    return this.http.get<any>('http://localhost:3000/profile', { withCredentials: true }).pipe(
      tap((result) => {
        this.sendUserEvent.emit(result)
      })
    )
  }
}
