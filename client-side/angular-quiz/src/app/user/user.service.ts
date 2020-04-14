import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: IUser;

  constructor(private http: HttpClient) { }
  
  getUserData(userId) {
    return this.http.get(`http://localhost:8888/api/user/${userId}`, { responseType: 'text'});
  }

  putUserData(userId: string, score: number, timeSpent: number) {
    const body = { userId: userId, score: score, timeSpent: timeSpent };
    return this.http.post(`http://localhost:8888/api/user/update`, body);
  }

  submitUserQuizData(userId: string, username: string, score: number, timeSpent: string) {
    const body = { userId: userId, username: username, score: score, timeSpent: timeSpent };
    return this.http.post(`http://localhost:8888/api/scores`, body);
  }
}