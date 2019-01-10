import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavbarComponent } from './navbar/navbar.component'
import { SplashPageComponent } from './splash-page/splash-page.component'
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component'
import { LogInFormComponent } from './log-in-form/log-in-form.component'
import { ProfileComponent } from './profile/profile.component'
import { CreateTeamComponent } from './create-team/create-team.component'
import { CreatedTeamsComponent } from './created-teams/created-teams.component'
import { JoinedTeamsComponent } from './joined-teams/joined-teams.component'
import { JoinTeamComponent } from './join-team/join-team.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SplashPageComponent,
    SignUpFormComponent,
    LogInFormComponent,
    ProfileComponent,
    CreateTeamComponent,
    CreatedTeamsComponent,
    JoinedTeamsComponent,
    JoinTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
