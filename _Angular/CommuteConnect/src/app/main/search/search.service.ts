import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient,) { }

  Search(start, end) {
    let url = environment.baseURL + '/Post/Search/' + start + '/' + end;
    let sub = new AsyncSubject();
    console.log(url);

    this.http.get(url).subscribe(res => {
      sub.next(res);
      sub.complete();

    });
    return sub;
  }
}
