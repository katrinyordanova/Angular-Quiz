import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: IUser;
    constructor(private http: HttpClient) {}

    register(name: string, password: string) {
        const body = { name: name, password: password };
        console.log(body);
        return this.http.post<IUser>('http://localhost:8888/api/user/register', body);
    }
}
