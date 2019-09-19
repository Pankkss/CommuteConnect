import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AsyncSubject } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,) { }

  GetUser(userID) {
    let url = environment.baseURL + '/GetUser/' + userID;

    let sub = new AsyncSubject();

    this.http.get<User>(url).subscribe(res=> {
      sub.next(res);
      sub.complete();
    });
    return sub;
  }

  GetUserRides() {

  }
}
