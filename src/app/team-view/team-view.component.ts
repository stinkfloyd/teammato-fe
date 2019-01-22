import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { UserService } from '../user-service.service'

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.scss']
})
export class TeamViewComponent implements OnInit {
  id: number
  team = {
    name: ''
  }
  constructor(private router: Router, private route: ActivatedRoute, private user: UserService) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10)
    this.user.getTeam(this.id).subscribe(team => {
      this.team = { ...team }
    }, error => {
      this.goTo('teamList')
    })
  }

  goTo(path): void {
    this.router.navigateByUrl(path)
  }
}
