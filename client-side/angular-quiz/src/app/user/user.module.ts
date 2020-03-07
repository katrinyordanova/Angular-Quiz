import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './user-routing.module';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [HomepageComponent, QuizComponent, ResultComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    UserRoutingModule,
    RouterModule,
  ]
})
export class UserModule { }
