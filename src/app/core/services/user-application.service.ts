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
  public getUserApplicationHotel(userID?: any) {
    return this.http.get(`${BACKEND_URL}api/hotels`);
  }

  public getUserApplicationsByID(userID?: any) {
    return this.http.get(`${BACKEND_URL}api/tourist-guides/${userID}`);
  }
  public getResturantApplicationsByID(userID?: any) {
    return this.http.get(`${BACKEND_URL}api/restaurants/${userID}`);
  }

  public getApplicationByRole() {
    return this.http.get(`${BACKEND_URL}api/get-role-tourist-guides`);
  }
  public getApplicationByResturant() {
    return this.http.get(`${BACKEND_URL}api/get-role-restaurants`);
  }

  public getTravelAgencyByID(id: any) {
    return this.http.get(`${BACKEND_URL}api/travel-agencies/${id}`);
  }
  public getApplicationByTravelAgency() {
    return this.http.get(`${BACKEND_URL}api/get-role-travel-agencies`);
  }
  public getHotelByID(id: any) {
    return this.http.get(`${BACKEND_URL}api/hotels/${id}`);
  }
  public getApplicationByHotel() {
    return this.http.get(`${BACKEND_URL}api/get-role-hotels`);
  }

  // public getApplicationByRole() {
  //   return this.http.get(`${BACKEND_URL}api/get-role-tourist-guides`);
  // }
  // public getApplicationByRole() {
  //   return this.http.get(`${BACKEND_URL}api/get-role-tourist-guides`);
  // }

  // http://dts-api.test/api/tourist-guides/change-status/39
  public changeStatus(application_id?: any, data?: FormData) {
    return this.http.post(`${BACKEND_URL}api/change-status/${application_id}`, data);
  }
  // http://localhost:3001/v1/apply-tourism/all?pageNo=0&limit=10&user_id=1
}
