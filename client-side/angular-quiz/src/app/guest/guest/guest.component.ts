import { Component } from '@angular/core';
import { faConciergeBell, faFingerprint } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent {
  faConciergeBell = faConciergeBell;
  faFingerprint = faFingerprint;
}
