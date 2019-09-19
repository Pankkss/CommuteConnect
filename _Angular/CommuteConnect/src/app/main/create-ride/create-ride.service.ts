import { Injectable } from '@angular/core';
import { AsyncSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginService } from 'src/app/login.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateRideService {

  constructor(private login: LoginService,
              private http: HttpClient,) { }

  AddRide(title, company, start, end ,details, date) {
    let sub = new AsyncSubject();

    let url = environment.baseURL + '/AddPost';

    console.log('user=',this.login.user);
    this.http.post(url, {
      "userID": this.login.user.userID,
      "details" : details,
      "start" : start,
      "end" : end,
      "year": date.getFullYear(),
      "month": date.getMonth(),
      "day": date.getDate(),
      "name": title,
      "company" : company
    }).subscribe(res => {
      sub.next(res);
      sub.complete();
    });
    return sub;
  }
}
