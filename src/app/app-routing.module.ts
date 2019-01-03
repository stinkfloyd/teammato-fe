import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component'
import { LogInFormComponent } from './log-in-form/log-in-form.component'
import { SplashPageComponent } from './splash-page/splash-page.component'
import { ProfileComponent } from './profile/profile.component'

const routes: Routes = [
  { path: '', component: SplashPageComponent },
  { path: 'signup', component: SignUpFormComponent },
  { path: 'login', component: LogInFormComponent },
  { path: 'profile', component: ProfileComponent, }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
