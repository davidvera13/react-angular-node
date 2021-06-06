import {Inject, Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from "../services/auth.service";
import {DOCUMENT} from "@angular/common";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private readonly pathName: string;

  constructor(private authService: AuthService,
              @Inject(DOCUMENT) private document: Document) {
    this.pathName = document.location.protocol +'//'
      + document.location.hostname + ':'
      + this.document.location.port + '/'
      + this.document.location.pathname;
}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    debugger
    console.log("In TokenInterceptor > intercept");
    console.log(!request.url.includes(this.pathName));
    if(!request.url.includes(this.pathName)) {
      return next.handle(request);
    }
    const token = this.authService.authToken;
    if (token) {
      request = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${token}`
        }
      })
    }
    return next.handle(request);
  }
}
