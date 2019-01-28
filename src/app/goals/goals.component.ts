import { Component, OnInit, Input } from '@angular/core'
import { identifierModuleUrl } from '@angular/compiler'
import { GoalService } from '../goal.service'
import { SocketService } from '../socket.service'
import { Socket } from 'dgram'

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {

  edit: boolean
  @Input() teamID
  @Input() username
  goalList = []


  constructor(private goals: GoalService, private socket: SocketService) { }

  ngOnInit() {
    this.getGoals()
    this.socket.getGoals().subscribe((goal: object) => {
      this.goalList.push(goal)
    })
  }

  getGoals = () => {
    this.goals
      .getGoals(this.teamID)
      .subscribe(goals => {
        this.goalList = goals
      })
  }
  onClick = () => {
    this.edit = !this.edit
  }
}
