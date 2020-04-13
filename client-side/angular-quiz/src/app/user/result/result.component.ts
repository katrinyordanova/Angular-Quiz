import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz/quiz.service';
import { Router } from '@angular/router';
import { faUndoAlt, faList, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  faUndoAlt = faUndoAlt;
  faList = faList;
  faCheck = faCheck;
  correctAnswers: any[];

  constructor(public quizService: QuizService, private router: Router) { }

  ngOnInit() {
    this.quizService.correctAnswers = 0;
    this.quizService.questions.forEach((element, index) => {
      if(element.answer === element.userAnswer) {
        this.quizService.correctAnswers++;
      }
    });
  }

  // onSubmit() {
  //   this.quizService.submitScore().subscribe(() => {

  //   });
  // }
}
