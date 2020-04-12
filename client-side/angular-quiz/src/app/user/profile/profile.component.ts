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
  timeSpent: number;

  constructor(public userService: UserService) { }

  ngOnInit() {
    const userId = localStorage.getItem('user');
    this.userService.getUserData(userId).subscribe((data: any) => {
      const userData = JSON.parse(data);
      const values = Object.values(userData);
      this.username = values[1].toString();
      this.score = Number(values[3]);
      this.timeSpent = Number(values[4]);
    });
  }
}
