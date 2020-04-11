import { Component } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { Router } from '@angular/router';
import { RegisterComponent } from '../../authentication/register/register.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  get isLogged() {
    return this.userService.isLogged;
  }

  constructor(private userService: UserService,
              private router: Router) { }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }

  home() {
    this.router.navigate(['/home'])
  }
}
