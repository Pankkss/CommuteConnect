import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AsyncSubject } from 'rxjs';
import { ride } from 'src/app/models/ride';

@Injectable({
  providedIn: 'root'
})
export class GetRidesService {

  constructor(private http: HttpClient,) { }

  GetRecentPosts() {
    let url = environment.baseURL + '/Post/GetRecent';
    let sub = new AsyncSubject();

    this.http.get<ride[]>(url).subscribe( res => {
      sub.next(res);
      sub.complete();
    })

    return sub;
  }

  SearchPosts(query) {
    let url = environment.baseURL + '/Rides/' + query;
    let sub = new AsyncSubject();

    this.http.get<ride[]>(url).subscribe(res => {
      sub.next(res);
      sub.complete();
    });
    return sub;
  }
}
