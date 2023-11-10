import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BACKEND_URL } from '../constants/constants';
@Injectable({
  providedIn: 'root',
})
export class LoginSignUpService {
  constructor(private http: HttpClient) {}

  public signin(data: any) {
    return this.http.post(`${BACKEND_URL}v1/auth/login`, data);
  }

  public signup(username: string, email: string, password: string, confirmpassword: string, cninc: any) {
    return this.http.post(`${BACKEND_URL}api/user/register`, {
      username,
      email,
      password,
      confirmpassword,
      cninc,
    });
  }

  public getUserProfile(access_token: string) {
    if (typeof access_token === 'string') {
      return this.http.get(`${BACKEND_URL}v1/user/${access_token}`);
    } else {
      return this.http.get(`${BACKEND_URL}v1/user/${access_token}`);
    }
  }

  VerifyEmail(data: any) {
    return this.http.post(`${BACKEND_URL}v1/auth/verifyEmail`, data);
  }

  public logout(userId: number, access_token: string) {
    localStorage.removeItem('user');
    return this.http.get(`${BACKEND_URL}v1/auth/user/logout?userId=${userId}&access_token=${access_token}`);
  }
}
