import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces/user';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: IUser;

  currentUser: { name: string; password: string } = null;

  get isLogged() {
    return !!this.currentUser;
  }

  constructor(private http: HttpClient) {
    const currentUser = localStorage.getItem('current-user');
    this.currentUser = currentUser ? JSON.parse(currentUser): null;
  }

  register(name: string, password: string) {
    localStorage.setItem('current-user', JSON.stringify({ name, password }));
    this.currentUser = { name, password };
    const body = { name: name, password: password };
    return this.http.post<IUser>('http://localhost:8888/api/user/register', body);
  }

  login(name: string, password: string) {
    localStorage.setItem('current-user', JSON.stringify({ name, password }));
    this.currentUser = { name, password };
    return this.http.post<IUser>('http://localhost:8888/api/user/login', { name: name, password: password });
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('current-user');
  }
}
