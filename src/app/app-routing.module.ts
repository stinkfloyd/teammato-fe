import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component'
import { SigninComponent } from './signin/signin.component'
import { SplashPageComponent } from './splash-page/splash-page.component'

const routes: Routes = [
  { path: '', component: SplashPageComponent },
  { path: 'signup', component: SignUpFormComponent },
  { path: 'signin', component: SigninComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
