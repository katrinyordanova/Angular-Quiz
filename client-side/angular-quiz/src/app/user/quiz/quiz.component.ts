import { Component, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';
import { Router } from '@angular/router';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  faQuestion = faQuestion;
  progress: number = 5;
  correctAnswers = [];

  constructor(public quizService: QuizService,
              private router: Router) { }

  ngOnInit() {
    if(parseInt(localStorage.getItem('seconds'))) {
      this.quizService.seconds = parseInt(localStorage.getItem('seconds'));
      this.quizService.questionProgress = parseInt(localStorage.getItem('questionProgress'));
      this.quizService.questions = JSON.parse(localStorage.getItem('questions'));

      if(this.quizService.questionProgress === 20) {
        this.router.navigate(['/home/result']);
      }else {
        this.startTimer();
      }
    }else {
      this.quizService.seconds = 0;
      this.quizService.questionProgress = 0;

      this.quizService.getQuiz().subscribe((data: any) => {
        this.quizService.questions = JSON.parse(data);
        this.startTimer();
      });
    }
  }

  startTimer() {
    this.quizService.timer = setInterval(() => {
      this.quizService.seconds++;
      localStorage.setItem('seconds', this.quizService.seconds.toString());
    }, 1000);
  }

  userAnswers(id: string ,choice: number) {
    this.quizService.questions[this.quizService.questionProgress].userAnswer = choice;
    localStorage.setItem('questions', JSON.stringify(this.quizService.questions));
    this.quizService.questionProgress++;
    localStorage.setItem('questionProgress', this.quizService.questionProgress.toString());
    this.progress += 5;
    if(this.quizService.questionProgress === 20) {
      clearInterval(this.quizService.timer);
      this.router.navigate(['/home/result'])
    }
  }
}
