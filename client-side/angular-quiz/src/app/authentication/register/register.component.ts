import { Component } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private userService: UserService) {}
  
  registerHandler(name: string, password: string) {
    this.userService.register(name, password).subscribe((data: any) => {
      localStorage.clear();
      localStorage.setItem('user', JSON.stringify(data));
    });
  }
}
