import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user: IUser;

  currentUser: { username: string } = null;

  get isLogged() {
    return !!this.currentUser;
  }

  constructor(private http: HttpClient) {
    const currentUser = localStorage.getItem('user');
    this.currentUser = currentUser ? JSON.parse(currentUser): null;
  }

  register(username: string, password: string) {
    this.currentUser = { username };
    localStorage.setItem('username', username);
    const body = { username: username, password: password, score: 0, timeSpent: 0 };
    return this.http.post<IUser>('http://localhost:8888/api/user/register', body);
  }

  login(username: string, password: string) {
    this.currentUser = { username };
    localStorage.setItem('username', username);
    const body = { username: username, password: password, score: 0, timeSpent: 0 };
    return this.http.post<IUser>('http://localhost:8888/api/user/login', body);
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('user');
  }
}
