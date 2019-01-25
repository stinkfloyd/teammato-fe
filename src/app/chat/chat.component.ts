import { Component, OnInit, Input } from '@angular/core'
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
  timestamp: Date

  @Input() username: string

  constructor(private socketService: SocketService, private userService: UserService) {
  }

  sendMessage() {
    this.timestamp = new Date(Date.now())
    this.socketService.sendMessage(this.message)
    this.message = ''
    console.log('test', this.timestamp)
  }

  ngOnInit() {

    this.socketService
      .getMessages()
      .subscribe((message: string) => {
        this.messages.unshift(message)
      })
  }
}
