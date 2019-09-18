import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { FormControl, Validators } from '@angular/forms';
import { SignUpService } from './sign-up.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(public login: LoginService,
              private SignUp: SignUpService,
              private router: Router,) { }

  ngOnInit() {
  }

  Company = new FormControl('', [Validators.required]);
  Home = new FormControl('', [Validators.required]);
  Bio = new FormControl('', [Validators.required]);
  Name = new FormControl('', [Validators.required]);
  Email = new FormControl('', [Validators.required]);

  locations = [
    {Name: 'Dallas'},
    {Name: 'Austin'},
    {Name: 'San Antonio'},
    {Name: 'Houston'},
  ];

  onSubmit() {
    this.login.user.firstLogin = true;
    console.log('sign up user =', this.login.user);
    let company = this.Company.value;
    let home = this.Home.value;
    let bio = this.Bio.value;
    let name = this.Name.value;
    let email = this.Email.value;

    this.SignUp.AddUser(company, home, bio, name, email).subscribe(res => {
      if (this.login.user.firstLogin) {
        this.router.navigate(['main/CreateRide']);
      }
      else {
        this.router.navigate(['main/search']);
      }
    });
  }

}
