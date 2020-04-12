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
}
