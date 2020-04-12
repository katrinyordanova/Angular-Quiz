import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  get isLogged() {
    return this.authenticationService.isLogged;
  }

  constructor(private authenticationService: AuthenticationService,
              private router: Router) { }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['']);
  }
}
