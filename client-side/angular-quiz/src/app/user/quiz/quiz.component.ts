import { Component, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(public quizService: QuizService,
              private route: Router) { }

  ngOnInit() {
    this.quizService.seconds = 0;
    this.quizService.questionProgress = 0;

    this.quizService.getQuiz().subscribe((data: any) => {
      this.quizService.questions = JSON.parse(data);
      this.startTimer();
    })
  }

  startTimer() {
    this.quizService.timer = setInterval(() => {
      this.quizService.seconds++;
    }, 1000);
  }

  userAnswer(id: string, choice: number) {
    this.quizService.questions[this.quizService.questionProgress].answer = choice;
    this.quizService.questionProgress++;
    if(this.quizService.questionProgress === 13) {
      clearInterval(this.quizService.timer);
      this.route.navigate['/result'];
    }
  }

  rightAnswers() {

  }
}