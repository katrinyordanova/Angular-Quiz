import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestComponent } from './guest/guest.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [GuestComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ]
})
export class GuestModule { }
