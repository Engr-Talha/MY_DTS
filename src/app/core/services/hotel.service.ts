import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BACKEND_URL } from '../constants/constants';
@Injectable({
  providedIn: 'root',
})
export class HotelService {
  constructor(private http: HttpClient) {}

  public registerHotel(payloadObj: FormData) {
    // return this.http.post(`${BACKEND_URL}v1/apply-tourism`, payloadObj);
    return this.http.post(`${BACKEND_URL}api/hotels`, payloadObj);
  }

  public UpdateHotel(id: any, payloadObj: FormData) {
    // return this.http.post(`${BACKEND_URL}v1/apply-tourism`, payloadObj);
    return this.http.post(`${BACKEND_URL}api/hotels/${id}`, payloadObj);
  }

  public getHotelByID(id: any) {
    return this.http.get(`${BACKEND_URL}api/hotels/${id}`);
  }

  public getAllHotels() {
    return this.http.get(`${BACKEND_URL}api/get-user-hotels`);
  }
}