import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import {
  checkUsernameUrl,
  loginUrl,
  registerUrl,
  setPasswordUrl,
  verifyInfoUrl,
} from "../base-urls";
import { accessTokenKey, refreshTokenKey } from "../models/constant";
import { Result } from "../models/result";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  login(userInfo: any) {
    return this.http.post<Result<any>>(loginUrl, userInfo);
  }

  logout() {
    this.localStorageService.removeItem(accessTokenKey);
    this.localStorageService.removeItem(refreshTokenKey);
    this.router.navigate(["/login/login-form"]);
  }

  register(user: any) {
    return this.http.post<Result<any>>(registerUrl, user);
  }

  checkUsername(username: any) {
    return this.http.post<Result<any>>(checkUsernameUrl, username);
  }

  verifyInfo(userInfo: any) {
    return this.http.post<Result<any>>(verifyInfoUrl, userInfo);
  }

  setPassword(pswInfo: any) {
    return this.http.post<Result<any>>(setPasswordUrl, pswInfo);
  }
}
