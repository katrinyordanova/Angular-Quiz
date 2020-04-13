import { Component } from '@angular/core';
import { faHelicopter, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  faHelicopter = faHelicopter;
  faPaperPlane = faPaperPlane;

  constructor(private router: Router) {}
  
  startQuiz() {
    localStorage.setItem('questionProgress', "0");
    localStorage.setItem('questions', "");
    localStorage.setItem('seconds', "0");
    this.router.navigate(['/home/quiz']);
  }
}
