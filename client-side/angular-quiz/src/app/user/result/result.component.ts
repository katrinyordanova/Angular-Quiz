import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz/quiz.service';
import { Router } from '@angular/router';
import { faUndoAlt, faList, faCheck } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../user.service';

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

  constructor(public quizService: QuizService, private router: Router,
              public userService: UserService) { }

  ngOnInit() {
    if(parseInt(localStorage.getItem('questionProgress')) === 20) {
      this.quizService.seconds = parseInt(localStorage.getItem('seconds'));
      this.quizService.questionProgress = parseInt(localStorage.getItem('questionProgress'));
      this.quizService.questions = JSON.parse(localStorage.getItem('questions'));

      this.quizService.correctAnswers = 0;
      this.quizService.questions.forEach((element, index) => {
        if(element.answer === element.userAnswer) {
          this.quizService.correctAnswers++;
        }
      });
      const userId = localStorage.getItem('userId');
      const userScore = this.quizService.correctAnswers;
      let quizTime = this.quizService.elapsedTime().split(':');
      let minutes = quizTime[1];
      let seconds = quizTime[0]; 
      let time = minutes.concat(seconds);
      const userQuizTime = Number(time);
      this.userService.putUserData(userId, userScore, userQuizTime)
      .subscribe((data: any) =>{}, 
      (error) => {
        console.log(error);
      });
    }else {
      this.router.navigate(['/home/quiz']);
    }
  }

  restartQuiz() {
    localStorage.setItem('questionProgress', "0");
    localStorage.setItem('questions', "");
    localStorage.setItem('seconds', "0");
    this.router.navigate(['/home/quiz']);
  }
}
