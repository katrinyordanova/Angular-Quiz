import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestComponent } from './guest/guest.component';
import { AuthenticationRoutingModule } from '../authentication/authentication-routing.module';



@NgModule({
  declarations: [GuestComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ]
})
export class GuestModule { }
