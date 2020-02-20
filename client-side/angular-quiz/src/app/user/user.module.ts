import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './user-routing.module';
import { QuizComponent } from './quiz/quiz.component';

@NgModule({
  declarations: [HomepageComponent, QuizComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
  ]
})
export class UserModule { }
