import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BACKEND_URL } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class TravelAgencyService {
  constructor(private http: HttpClient) {}

  public registerTravelAgency(payloadObj: FormData) {
    // return this.http.post(`${BACKEND_URL}v1/apply-tourism`, payloadObj);
    return this.http.post(`${BACKEND_URL}api/travel-agencies`, payloadObj);
  }

  public UpdateTravelAgency(id: any, payloadObj: FormData) {
    // return this.http.post(`${BACKEND_URL}v1/apply-tourism`, payloadObj);
    return this.http.post(`${BACKEND_URL}api/travel-agencies/${id}`, payloadObj);
  }

  public getTravelAgenciesID(id: any) {
    return this.http.get(`${BACKEND_URL}api/travel-agencies/${id}`);
  }
  public TravelAgenciesID() {
    return this.http.get(`${BACKEND_URL}api/get-user-travel-agencies`);
  }
}
