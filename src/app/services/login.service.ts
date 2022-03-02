import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginUrl, registerUrl } from '../base-url';
import { Result } from '../model/result';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(user: any) {
    return this.http.post<Result<any>>(loginUrl, user);
  }
  register(user: any) {
    return this.http.post<Result<any>>(registerUrl, user);
  }
}
