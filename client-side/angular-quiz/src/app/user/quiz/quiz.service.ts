import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class QuizService {
    questions: any[];
    seconds: number;
    timer;
    questionProgress: number;
    rightAnswer: any[];
    correctAnswers: number = 0;

    elapsedTime() {
        return Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
    }
    
    constructor(private http: HttpClient) {}

    getQuiz() {
       return this.http.get('http://localhost:8888/api/questions/questions', { responseType: 'text'});
    }

    userAnswers() {
        const body = this.questions.map(a => a.answer);
        return this.http.post('http://localhost:8888/api/answers', body);
    }
}