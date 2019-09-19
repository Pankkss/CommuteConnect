import { Injectable } from '@angular/core';
import { AsyncSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient,
              public login: LoginService,) { }

  AddUser(company, bio, name, email, home) {
    let sub = new AsyncSubject();

    let url = environment.baseURL + '/AddUser';
    console.log('sign up user =', this.login.user);


    this.http.post(url, {
      "name": name,
      "email" : email,
      "bio" : bio,
      "id" : this.login.user.userID,
      "company" : company,
      "homeCity" : home,
      "token" : this.login.user.accessToken
    }).subscribe(res => {
      sub.next(res);
      sub.complete();
    });
    return sub;
  }
}
