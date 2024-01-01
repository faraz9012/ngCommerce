import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, take, exhaustMap } from 'rxjs';
import { AccountService } from "../services/account.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private accountService: AccountService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>  {
    return this.accountService.currentUser$.pipe(
      take(1),
      exhaustMap(user => {

        if (!user || !user.token) return next.handle(request);
        
        const modifiedRequest = request.clone({
          setHeaders: {
            Authorization: `Bearer ${user.token}`
          }
        });

        return next.handle(modifiedRequest);
      })
    );
  }
}
