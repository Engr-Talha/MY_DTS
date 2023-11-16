import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BACKEND_URL } from '../constants/constants';
@Injectable({
  providedIn: 'root',
})
export class UserApplicationService {
  constructor(private http: HttpClient) {}

  public getAlluserApplications(userID: any) {
    return this.http.get(`${BACKEND_URL}v1/apply-tourism/all?pageNo=0&limit=10user_id=${userID}`);
  }

  // http://localhost:3001/v1/apply-tourism/all?pageNo=0&limit=10&user_id=1
}
