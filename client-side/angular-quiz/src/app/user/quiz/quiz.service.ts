import { Injectable } from "@angular/core";
import { IQuiz } from 'src/app/shared/interfaces/quiz';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class QuizService {
    questions: any[];
    seconds: number;
    timer;
    questionProgress: number;
    correctAnswers: number = 0;

    elapsedTime() {
        return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
    }
    
    constructor(private http: HttpClient) {}

    getUsername() {
        const user = JSON.parse(localStorage.getItem('current-user'));
        return user.name;
    }

    getQuiz() {
       return this.http.get('http://localhost:8888/api/quiz/', { responseType: 'text'});
    }

    getRightAnswers() {
        const body = this.questions.map(q => q.id);
        return this.http.post('http://localhost:8888/api/answers', body)
    }

    submitScore() {
        const data = JSON.parse(localStorage.getItem('current-user'));
        data.score = this.correctAnswers;
        data.timeSpent = this.seconds;
        return this.http.post('http://localhost:8888/api/submited-score', data);
    }
}