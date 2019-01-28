import { Injectable } from '@angular/core'
import * as io from 'socket.io-client'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private url = 'http://localhost:3000'
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

  public sendGoalAdded(goal) {
    this.socket.emit('new-goal', goal)
  }

  public getMessages = () => {
    return Observable.create((observer) => {
      this.socket.on('new-message', (message) => {
        observer.next(message)
      })
    })
  }
}
