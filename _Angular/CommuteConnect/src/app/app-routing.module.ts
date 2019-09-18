import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './main/search/search.component';
import { CreateRideComponent } from './main/create-ride/create-ride.component';


const routes: Routes = [
  { path: '', component: SplashPageComponent },
  { path: 'main', component: MainComponent, children: [
    { path: 'signup', component: SignUpComponent },
    { path: 'search', component: SearchComponent },
    { path: 'CreateRide', component: CreateRideComponent },

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
