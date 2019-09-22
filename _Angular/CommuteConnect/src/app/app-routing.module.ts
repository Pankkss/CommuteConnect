import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './main/search/search.component';
import { CreateRideComponent } from './main/create-ride/create-ride.component';
import { UserComponent } from './main/user/user.component';


const routes: Routes = [
  { path: '', component: SplashPageComponent },
  { path: 'main', component: MainComponent, children: [
    { path: 'signup', component: SignUpComponent },
    { path: 'search/:start/:end', component: SearchComponent },
    { path: 'CreateRide', component: CreateRideComponent },
    { path: 'User/:id', component: UserComponent },

  ]},
  { path: '*', component: SplashPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
