import { Component } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { Router } from '@angular/router';
import { faUserNinja, faUnlock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ '../../shared/forms/style.css','./register.component.css']
})
export class RegisterComponent {

  constructor(private userService: UserService,
              private route: Router) {}
  
  loginButton: boolean = false;

  faUserNinja = faUserNinja;
  faUnlock = faUnlock;

  registerHandler(name: string, password: string) {
    this.userService.register(name, password).subscribe((data: any) => {
      localStorage.clear();
      localStorage.setItem('current-user', JSON.stringify(data));
      this.route.navigate(['home']);
    });
  }
}
