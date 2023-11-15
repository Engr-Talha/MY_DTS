import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BACKEND_URL } from '../constants/constants';
@Injectable({
  providedIn: 'root',
})
export class TouristGuideService {
  constructor(private http: HttpClient) {}

  public registerTouristguide(payloadObj: FormData) {
    return this.http.post(`${BACKEND_URL}v1/apply-tourism`, payloadObj);
  }
}
