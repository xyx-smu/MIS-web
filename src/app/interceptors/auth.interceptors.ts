import {
  HttpErrorResponse,
  HttpHandler,
  HttpHeaderResponse,
  HttpInterceptor,
  HttpProgressEvent,
  HttpRequest,
  HttpResponse,
  HttpSentEvent,
  HttpUserEvent,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { NzNotificationService } from "ng-zorro-antd/notification";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, filter, finalize, switchMap, take } from "rxjs/operators";
import { LoginService } from "../services/login.service";

import { LocalStorageService } from "../services/local-storage.service";
import { TokenService } from "../services/token.service";
import { accessTokenKey, refreshTokenKey } from "../models/constant";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  isRefreshingToken = false;
  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
    null || ""
  );
  constructor(
    private localStorageService: LocalStorageService,
    private tokenService: TokenService,
    private router: Router,
    private notification: NzNotificationService,
    private loginService: LoginService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<
    | HttpSentEvent
    | HttpHeaderResponse
    | HttpProgressEvent
    | HttpResponse<any>
    | HttpUserEvent<any>
    | any
  > {
    return next
      .handle(
        this.addTokenToRequest(
          request,
          this.localStorageService.getItem(accessTokenKey)
        )
      )
      .pipe(
        catchError((err) => {
          if (err instanceof HttpErrorResponse) {
            // 若refresh-token失败后，则返回登录页面
            if (err.error.detail === "Token is invalid or expired") {
              this.notification.create(
                "warning",
                "登录超时",
                "你的登录状态已超时，请重新登录系统。"
              );
              // this.notification.template(this.template);
              return this.loginService.logout() as any;
            }
            // tslint:disable-next-line:no-angle-bracket-type-assertion
            switch ((<HttpErrorResponse>err).status) {
              case 401:
                return this.handle401Error(request, next);
              // case 400:
              //   return <any>this.authService.logout();
            }
            // switch ((<HttpErrorResponse>err).status) {
            //   case 401:
            //     return this.handle401Error(request, next);
            //   // case 400:
            //   //   return <any>this.authService.logout();
            // }
          } else {
            return throwError(err);
          }
        })
      );
  }

  private addTokenToRequest(
    request: HttpRequest<any>,
    token: string
  ): HttpRequest<any> {
    return request.clone({ setHeaders: { Authorization: `JWT ${token}` } });
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshingToken) {
      this.isRefreshingToken = true;

      // Reset here so that the following requests wait until the token
      // comes back from the refreshToken call.
      this.tokenSubject.next(null || "");

      return this.tokenService.refreshAccessTokenFromBackend().pipe(
        switchMap((token: any) => {
          if (token) {
            this.tokenSubject.next(token.access);
            this.localStorageService.setItem(accessTokenKey, token.access);
            this.localStorageService.setItem(refreshTokenKey, token.refresh);
            return next.handle(this.addTokenToRequest(request, token.access));
          }
          // tslint:disable-next-line:whitespace
          // tslint:disable-next-line: no-angle-bracket-type-assertion
          return <any>this.loginService.logout();
        }),
        catchError((err) => {
          // tslint:disable-next-line:no-angle-bracket-type-assertion
          return <any>this.loginService.logout();
        }),
        finalize(() => {
          this.isRefreshingToken = false;
        })
      );
    } else {
      this.isRefreshingToken = false;

      return this.tokenSubject.pipe(
        filter((token) => token != null),
        take(1),
        switchMap((token) => {
          return next.handle(this.addTokenToRequest(request, token));
        })
      );
    }
  }
}
