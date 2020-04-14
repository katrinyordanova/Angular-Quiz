import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: string;
  score: number;
  timeSpent: string;

  constructor(public userService: UserService) { }

  ngOnInit() {
    const userId = localStorage.getItem('userId');
    this.userService.getUserData(userId).subscribe((data: any) => {
      const userData = JSON.parse(data);
      const values = Object.values(userData);
      this.username = values[1].toString();
      this.score = Number(values[3]);
      const minutes = Number(values[4]) % 10;
      const seconds = Number(values[4]) / 10;
      this.timeSpent = `${minutes}:${Math.floor(seconds)}`;
    });
  }

  submitScore() {
    const userId = localStorage.getItem('userId');
    this.userService.submitUserQuizData(userId, this.username, this.score, this.timeSpent);
  }
}
