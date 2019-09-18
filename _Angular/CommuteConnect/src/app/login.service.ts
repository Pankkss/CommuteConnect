import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from "./models/user";
import { Router } from '@angular/router';
import { ShowNavService } from './show-nav.service';
declare var FB: any;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,
              private router: Router,
              private ngzone: NgZone) { }

  user: User;

  init() {
    this.user = new User();
    (window as any).fbAsyncInit = function() {
      FB.init({
        appId      : '419839155312363',
        cookie     : true,
        xfbml      : true,
        version    : 'v4.0'
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));

     FB.getLoginStatus(function(response) {
      this.statusChangeCallback(response);
     });

  }
  statusChangeCallback(response) {
    console.log(response)
  }

  submitLogin() {
    FB.login((response)=> {
          console.log('submitLogin',response);
          if (response.authResponse.userID) {
            console.log('authResponse');
            if (response.status === "connected") {
              this.CheckRegistration(response)
            }
           }
           else {
           console.log('User login failed');
         }
      });
  }

  CheckRegistration(res) {
    const url = environment.baseURL + '/GetUser/' + res.authResponse.userID;
    this.http.get<User>(url).subscribe(response => {
      if (Object.keys(response).length === 0) {
        //register
        this.user.id = res.authResponse.userID;
        this.user.accessToken = res.authResponse.accessToken;
        console.log('no user');
        this.ngzone.run(() => {
          this.router.navigate(['main/signup']);

        })
      }
      else {
        this.user = response;
        this.ngzone.run(() => {
          this.router.navigate(['main/search']);

        })
      };
      console.log('user = ',response);
    })
  }
}
