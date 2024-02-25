import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BACKEND_URL } from '../constants/constants';
@Injectable({
  providedIn: 'root',
})
export class UserApplicationService {
  constructor(private http: HttpClient) {}

  public getAlluserApplications(userID: any) {
    return this.http.get(`${BACKEND_URL}v1/apply-tourism/all?pageNo=0&limit=10&user_id=${userID}`);
  }

  public getUserAllApplications(userID?: any) {
    return this.http.get(`${BACKEND_URL}api/get-user-tourist-guides`);
  }

  public getUserApplicationsByID(userID?: any) {
    return this.http.get(`${BACKEND_URL}api/tourist-guides/${userID}`);
  }

  public getApplicationByRole() {
    return this.http.get(`${BACKEND_URL}api/get-role-tourist-guides`);
  }

  // http://dts-api.test/api/tourist-guides/change-status/39
  public changeStatus(application_id?: any, data?: FormData) {
    return this.http.post(`${BACKEND_URL}api/change-status/${application_id}`, data);
  }
  // http://localhost:3001/v1/apply-tourism/all?pageNo=0&limit=10&user_id=1
}
