import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ShowNavService } from '../show-nav.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.scss']
})
export class SplashPageComponent implements OnInit {

  constructor(private router: Router,
              public showNav: ShowNavService,
              public login: LoginService) { }

  ngOnInit() {
  }

  start = new FormControl('', [Validators.required]);
  destination = new FormControl('', [Validators.required]);
  date = new FormControl(Date(), [Validators.required]);
  locations = [
    {Name: 'Dallas'},
    {Name: 'Austin'},
    {Name: 'San Antonio'},
    {Name: 'Houston'},
  ];

  onSubmit() {
    this.router.navigate['/main/search', this.start.value, this.destination.value];
  }

}
