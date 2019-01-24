import { Component, OnInit } from '@angular/core'
import { SocketService } from '../socket.service'
import { UserService } from '../user-service.service'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  message: string
  messages: string[] = []
  messageObj = { message: '', team: {} }

  constructor(private socketService: SocketService, private userService: UserService) {
  }

  sendMessage() {
    this.messageObj.message = this.message
    this.messageObj.team = this.userService
    this.socketService.sendMessage(this.message)
    this.message = ''
  }

  ngOnInit() {
    this.socketService
      .getMessages()
      .subscribe((message: string) => {
        this.messages.push(message)
      })
  }
}
