import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { MatCardModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatInputModule } from "@angular/material";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { MainComponent } from './main/main.component';
import { LoginService } from "./login.service";
import { SearchComponent } from './main/search/search.component';
import { CreateRideComponent } from './main/create-ride/create-ride.component';
import { SearchCardComponent } from './main/search/search-card/search-card.component';
import { PostComponent } from './main/post/post.component';
import { UserComponent } from './main/user/user.component';
@NgModule({
  declarations: [
    AppComponent,
    SplashPageComponent,
    LoginComponent,
    SignUpComponent,
    RegisterUserComponent,
    MainComponent,
    SearchComponent,
    CreateRideComponent,
    SearchCardComponent,
    PostComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    HttpClientModule,
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
