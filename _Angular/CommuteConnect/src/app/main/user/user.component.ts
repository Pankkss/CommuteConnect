import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from './user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              ) { }

  user: User;
  url: string;
  ngOnInit() {
    let id= this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
    this.userService.GetUser(id).subscribe(res => {
      this.user = res as User;
      this.url = 'https://robohash.org/' + id;
      console.log(this.user);
    });
  }

}
