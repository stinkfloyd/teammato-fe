import { Injectable, EventEmitter, Output } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { catchError, tap } from 'rxjs/internal/operators'
import { CookieService } from 'ngx-cookie-service'


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  @Output() sendLoggedInEvent: EventEmitter<any> = new EventEmitter()

  constructor(private http: HttpClient, private cookie: CookieService) {
  }

  login(data): Observable<any> {
    return this.http.post<any>('http://localhost:3000/login', data, httpOptions).pipe(
      tap((result) => {
        console.log(result)
        result.success = true
        this.save_token(result)
      }),
      catchError(this.handleError<any>('login'))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T)
    }
  }

  private save_token(data) {
    this.sendLoggedInEvent.emit(data.token)
    this.cookie.set('token', data.token)
    return

  }
}
