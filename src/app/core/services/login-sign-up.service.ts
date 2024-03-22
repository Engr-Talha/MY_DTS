import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BACKEND_URL } from '../constants/constants';
@Injectable({
  providedIn: 'root',
})
export class LoginSignUpService {
  constructor(private http: HttpClient) {}

  public signin(data: FormData) {
    return this.http.post(`${BACKEND_URL}api/login`, data);
  }

  // api/login
  public signup(formdata: FormData) {
    return this.http.post(`${BACKEND_URL}api/register`, formdata);
  }

  getToken(): string | null {
    let accessToken = localStorage.getItem('token');
    if (accessToken == 'undefined') {
      return '';
    } else {
      return JSON.parse(localStorage.getItem('token') + '');
      // return localStorage.getItem(ACCESS_TOKEN) + '';
    }
  }

  public getalltourists(access_token?: string) {
    return this.http.get(`${BACKEND_URL}api/tourist-guides`);
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

  public forgotPassword(data: FormData) {
    return this.http.post(`${BACKEND_URL}api/forgetPassword`, data);
  }
}
