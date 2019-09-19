import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormControl, Validators } from "@angular/forms";
import { LoginService } from 'src/app/login.service';
import { CreateRideService } from './create-ride.service';

@Component({
  selector: 'app-create-ride',
  templateUrl: './create-ride.component.html',
  styleUrls: ['./create-ride.component.scss']
})
export class CreateRideComponent implements OnInit {

  constructor(public login: LoginService,
              private createRide: CreateRideService,) { }

  ngOnInit() {
  }



  Title = new FormControl('', [Validators.required]);
  Company = new FormControl('', [Validators.required]);
  Start = new FormControl('', [Validators.required]);
  End = new FormControl('', [Validators.required]);
  Date = new FormControl('', [Validators.required]);
  Details = new FormControl('', [Validators.required]);

  locations = [
    {Name: 'Dallas'},
    {Name: 'Austin'},
    {Name: 'San Antonio'},
    {Name: 'Houston'},
  ];


  onSubmit() {
    let title = this.Title.value;
    let company = this.login.user.company;
    let start = this.Start.value;
    let end = this.End.value;
    let details = this.Details.value;
    let date = new Date(this.Date.value);
    this.createRide.AddRide(title,company,start,end,details, date).subscribe( res => {
        console.log('Success');
    });


    return;
  }
}
