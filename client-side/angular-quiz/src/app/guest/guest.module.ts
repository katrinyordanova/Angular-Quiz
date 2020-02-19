import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestComponent } from './guest/guest.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [GuestComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class GuestModule { }
