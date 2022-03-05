import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NzMessageService } from "ng-zorro-antd/message";
import { Observable, of, throwError } from "rxjs";
import { mergeMap } from "rxjs/operators";

import { ApiError } from "../models/api-error";

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private message: NzMessageService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    /**
     * 对于所有调用后台获取到的结果进行拦截
     * 判断code是否为0
     * 为0表示成功
     * 不为0则表示有错误，弹出错误提示message，并抛出异常
     */
    return next.handle(req).pipe(
      mergeMap((event) => {
        if (event instanceof HttpResponse) {
          const body = event.body;
          if (body && body.code !== 0) {
            const apiError = new ApiError(body.code, body.message);
            const errResp = new HttpErrorResponse({
              error: apiError,
              headers: event.headers,
              status: event.status,
              url: event.url!,
            });
            this.message.error(body.message);
            return throwError(errResp);
          }
        }
        return of(event);
      })
      // ,
      // catchError((err: HttpErrorResponse) => {
      //   return this.handleNewHttpErrRes(err);
      // })
    );
  }

  handleNewHttpErrRes(event: any) {}
}
