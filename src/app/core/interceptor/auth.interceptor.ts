import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginSignUpService } from '../services/login-sign-up.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  currentUser: string;
  constructor(private LoginSignUpService: LoginSignUpService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.LoginSignUpService.getToken();

    const modified = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next.handle(modified);
  }
}
