import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { AuthenticationModule } from '../authentication/authentication.module';

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    RouterModule,
    AuthenticationModule
  ], 
  exports: [
    NavigationComponent
  ]
})
export class CoreModule { }
