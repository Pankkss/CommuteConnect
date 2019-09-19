import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { GetRidesService } from './get-rides.service';
import { ride } from 'src/app/models/ride';
import { ActivatedRoute, Router } from '@angular/router';
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
              public cdr: ChangeDetectorRef,
              private router: Router,
              ) { }

  rides: ride[];
  recent: boolean;

  start = new FormControl('', [Validators.required]);
  destination = new FormControl('', [Validators.required]);
  date = new FormControl(Date(), [Validators.required]);
  locations = [
    {Name: 'Dallas'},
    {Name: 'Austin'},
    {Name: 'San Antonio'},
    {Name: 'Houston'},
  ];

  ngOnInit() {
    let start = this.activeRoute.snapshot.paramMap.get('start');
    let end = this.activeRoute.snapshot.paramMap.get('end');
    console.log(start,end);
    if(start === 'recent') {
      this.GetRecent();
    }
    else {
      this.GetSearch(start, end);
    }

  }

  Search = new FormControl('', Validators.required);

  onSubmit() {
    let start = this.start.value;
    let end = this.destination.value;
    this.GetSearch(start, end);
  }

  GetRecent() {
    this.rideService.GetRecentPosts().subscribe(res => {
      this.rides = res as ride[];
      this.recent = true;
      this.cdr.detectChanges();
      console.log(this.rides);
    });
  }

  GetSearch(start, end) {
    this.recent = false;
    this.searchService.Search(start,end).subscribe(res => {
      this.rides = res as ride[];
      console.log(this.rides);
      this.cdr.detectChanges();
    });
  }
}
