import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BACKEND_URL } from '../constants/constants';
@Injectable({
  providedIn: 'root',
})
export class TouristGuideService {
  constructor(private http: HttpClient) {}

  public registerTouristguide(payloadObj: FormData) {
    // return this.http.post(`${BACKEND_URL}v1/apply-tourism`, payloadObj);
    return this.http.post(`${BACKEND_URL}api/tourist-guides`, payloadObj);
  }

  public UpdateTouristguide(id: any, payloadObj: FormData) {
    // return this.http.post(`${BACKEND_URL}v1/apply-tourism`, payloadObj);
    return this.http.post(`${BACKEND_URL}api/tourist-guides/${id}`, payloadObj);
  }

  public getTouristguidebyID(id: any) {
    return this.http.get(`${BACKEND_URL}v1/apply-tourism/${id}`);
  }
}
