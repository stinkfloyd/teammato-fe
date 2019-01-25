import { Injectable } from '@angular/core'
import * as io from 'socket.io-client'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private url = 'https://obscure-reaches-16352.herokuapp.com'
  private socket

  constructor() {
    this.socket = io(this.url)
  }

  public sendTeam(team) {
    this.socket.emit('Team', team)
  }

  public sendMessage(message) {
    this.socket.emit('new-message', message)
  }

  public getMessages = () => {
    return Observable.create((observer) => {
      this.socket.on('new-message', (message) => {
        observer.next(message)
      })
    })
  }
}
