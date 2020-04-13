import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { Router } from '@angular/router';
import { faUserNinja, faUnlock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ '../../shared/forms/style.css','./register.component.css']
})
export class RegisterComponent {

  constructor(private authenticationService: AuthenticationService,
              private route: Router) {}
  
  loginButton: boolean = false;

  faUserNinja = faUserNinja;
  faUnlock = faUnlock;

  registerHandler(username: string, password: string) {
    this.authenticationService.register(username, password).subscribe((data: any) => {
      localStorage.setItem('userId', data._id);
      this.route.navigate(['home']);
    });
  }
}
