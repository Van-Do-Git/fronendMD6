import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {MusicService} from "../service/music.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private tokenService: MusicService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let checkRequest = request;
    const token = window.sessionStorage.getItem("TOKEN");
    if(token!=null){
      checkRequest = request.clone({headers: request.headers.set('Authorization',token)});
    }
    return next.handle(checkRequest);
  }
}
export const httpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
]
