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

  constructor(private auth: AuthService) {}


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.includes('api.tomtom.com')) {
      return next.handle(request);
    }

    const token = this.auth.authToken;
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request);
  }
}
