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

    elapsedTime() {
        return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
    }
    
    constructor(private http: HttpClient) {}

    getQuestions() {
       return this.http.get('http://localhost:8888/api/quiz', { responseType: 'text'});
    }
}