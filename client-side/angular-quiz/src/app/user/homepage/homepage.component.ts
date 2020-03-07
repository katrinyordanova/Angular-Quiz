import { Component } from '@angular/core';
import { faHelicopter, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  faHelicopter = faHelicopter;
  faPaperPlane = faPaperPlane;
}
