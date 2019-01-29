import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'
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
  @Input() creator
  // tslint:disable-next-line:no-output-on-prefix
  @Output() emit: EventEmitter<any> = new EventEmitter()
  goalList = []


  constructor(private goals: GoalService, private socket: SocketService) { }

  ngOnInit() {
    this.getGoals()
    this.socket.getGoals().subscribe((goal: object) => {
      console.log('do we get here? getGoals')
      this.getGoals()
    })
    this.socket.acceptedGoals().subscribe((goal: object) => {
      this.getGoals()
    })
    this.socket.completedGoals().subscribe((goal: object) => {
      this.getGoals()
    })
    this.socket.unCompletedGoals().subscribe((goal: object) => {
      this.getGoals()
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

  acceptGoal = (event) => {
    console.log('event.target.id: ', event.target.id)
    console.log('username:', this.username)
    const user = { username: this.username }
    this.goals.acceptGoal(event.target.id, user).subscribe((goal) => {
      console.log('goal (acceptGoal result): ', goal)
      this.getGoals()
    })
  }

  completeGoal = (event) => {
    console.log('event.target.id: ', event.target.id)
    console.log('username:', this.username)
    const user = { username: this.username }
    this.goals.completeGoal(event.target.id, user).subscribe((goal) => {
      console.log('goal (acceptGoal result): ', goal)
      this.getGoals()
    })
  }

  unCompleteGoal = (event) => {
    console.log('event.target.id: ', event.target.id)
    console.log('username:', this.username)
    const user = { username: this.username }
    this.goals.unCompleteGoal(event.target.id, user).subscribe((goal) => {
      console.log('goal (acceptGoal result): ', goal)
      this.getGoals()
    })
  }
}
