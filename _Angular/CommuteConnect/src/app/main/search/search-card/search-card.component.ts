import { Component, OnInit, Input } from '@angular/core';
import { ride } from 'src/app/models/ride';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss']
})
export class SearchCardComponent implements OnInit {

  @Input() ride: ride;
  url: string;
  constructor(private router: Router,) { }

  ngOnInit() {
    this.url = 'https://robohash.org/' + this.ride.userID;
    console.log(this.ride.userID);
  }



}
