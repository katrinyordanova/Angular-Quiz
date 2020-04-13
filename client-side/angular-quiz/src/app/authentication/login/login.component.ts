import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { Router } from '@angular/router';
import { faUserAstronaut, faIdCardAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ '../../shared/forms/style.css', './login.component.css']
})
export class LoginComponent {

  constructor(private authenticationService: AuthenticationService,
              private route: Router) { }

  loginError: boolean = false;
  faUserAstronaut = faUserAstronaut;
  faIdCardAlt = faIdCardAlt;

  loginHandler(username: string, password: string) {
    this.authenticationService.login(username, password).subscribe((data: any) => {
      this.authenticationService.currentUser = { username };
      localStorage.setItem('username', username);
      localStorage.setItem('userId', data._id);
      this.route.navigate(['home']);
    },
    (error) => {
      this.loginError = true;
    });
  }
}
