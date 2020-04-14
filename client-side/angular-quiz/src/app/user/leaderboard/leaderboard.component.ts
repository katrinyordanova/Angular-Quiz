import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  constructor(public userService: UserService, public route: Router) { }

  info: any[];
  username: string;
  score: number;
  time: string;

  ngOnInit() {
    this.userService.getAllUsers().subscribe((data: any) => {
      let userData = JSON.parse(data);
      let userInfo = [];
      userData.forEach((element, index) => {
      let object = { username: element.username, score: element.score };
      userInfo.push(object);
      this.info = userInfo.sort((a,b)=> b.score - a.score);
      });
      const username = 0;
    });
  }

}
