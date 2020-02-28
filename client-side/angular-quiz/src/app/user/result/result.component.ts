import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(public quizService: QuizService, private router: Router) { }

  ngOnInit() {
    // this.quizService.getRightAnswers().subscribe((data: any) => {
    //   this.quizService.correctAnswers = 0;
    //   this.quizService.questions.forEach((element, index) => {
    //     if(element.answer === data[index]) {
    //       this.quizService.correctAnswers++;
    //       element.correct = data[index];
    //     }
    //   });
    // });
  }

  onSubmit() {
    this.quizService.submitScore().subscribe(() => {

    });
  }

  restartQuiz() {
    this.router.navigate(['/quiz'])
  }

}
