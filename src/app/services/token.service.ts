import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tokenRefreshUrl } from "../base-urls";
import { AccessToken } from "../models/token";

import { accessTokenKey, refreshTokenKey } from "./../models/constant";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
  providedIn: "root",
})
export class TokenService {
  refreshTokenTime!: Date;
  timeDebounce = 60;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  refreshAccessTokenFromBackend(): Observable<AccessToken> {
    const refreshToken = this.localStorageService.getItem(refreshTokenKey);
    const refreshJWT = {
      refresh: ` ${refreshToken}`,
    };
    return this.http.post<AccessToken>(tokenRefreshUrl, refreshJWT);
  }

  handleToken() {
    const currentTime = new Date();
    const response = {
      needTORefreshToken: true,
    };
    const accessTokenFromLocal =
      this.localStorageService.getItem(accessTokenKey);
    // 请求接口，刷新 token
    const reGetTokenFromNet = this.refreshAccessTokenFromBackend();

    // 没有 refreshTokenTime， 或
    // 没有 accessTokenFromLocal，或
    // 重试间隔大于 timeDebounce 秒，从网络获取，并记录时间
    if (
      !this.refreshTokenTime ||
      !accessTokenFromLocal ||
      (currentTime.getTime() - this.refreshTokenTime.getTime()) / 1000 >
        this.timeDebounce
    ) {
      this.refreshTokenTime = currentTime;
      return response;
    } else {
      response.needTORefreshToken = false;
      return response;
    }
  }
}
