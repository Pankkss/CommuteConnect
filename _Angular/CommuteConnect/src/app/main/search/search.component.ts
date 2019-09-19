import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { GetRidesService } from './get-rides.service';
import { ride } from 'src/app/models/ride';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private rideService: GetRidesService,
              private activeRoute: ActivatedRoute,
              private searchService: SearchService,
              ) { }

  rides: ride[];

  ngOnInit() {
    let start = this.activeRoute.snapshot.paramMap.get('start');
    let end = this.activeRoute.snapshot.paramMap.get('end');
    console.log(start,end);
    if(start === 'recent') {
      this.rideService.GetRecentPosts().subscribe(res => {
        this.rides = res as ride[];
        console.log(this.rides);
      });
    }
    else {
      this.searchService.Search(start,end).subscribe(res => {
        this.rides = res as ride[];
      });
    }

  }

  Search = new FormControl('', Validators.required);

  onSubmit() {
    this.rideService.SearchPosts(this.Search.value).subscribe(res => {
      this.rides = res as ride[];
      // for(let ride of res) {
      //   this.rides.push(ride);
      // }
    });
  }
}
