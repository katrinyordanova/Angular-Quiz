import { Component } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { Router } from '@angular/router';
import { faUserAstronaut, faIdCardAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ '../../shared/forms/style.css', './login.component.css']
})
export class LoginComponent {

  constructor(private userService: UserService,
              private route: Router) { }

  faUserAstronaut = faUserAstronaut;
  faIdCardAlt = faIdCardAlt;

  loginHandler(name: string, password: string) {
    this.userService.login(name, password);
    this.route.navigate(['home']);
  }
}
