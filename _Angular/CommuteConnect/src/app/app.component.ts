import { Component, OnInit } from '@angular/core';
import { ShowNavService } from './show-nav.service';
import { LoginService } from './login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [],
})
export class AppComponent implements OnInit {

  constructor(public login: LoginService){}
  title = 'CommuteConnect';


  ngOnInit() {
    this.login.init();
  }
}
