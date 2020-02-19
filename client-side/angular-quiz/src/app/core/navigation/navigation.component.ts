import { Component } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  get isLogged() {
    console.log(this.userService.isLogged);
    return this.userService.isLogged;
  }

  constructor(private userService: UserService,
              private router: Router) { }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }
}
