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

  faUserAstronaut = faUserAstronaut;
  faIdCardAlt = faIdCardAlt;

  loginHandler(name: string, password: string) {
    this.authenticationService.login(name, password).subscribe((data: any) => {
      localStorage.setItem('userId', data._id);
      this.route.navigate(['home']);
    })
  }
}
