import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BACKEND_URL } from '../constants/constants';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http: HttpClient) {}

  public get_header_types_of_challan(payloadObj: FormData) {
    // return this.http.post(`${BACKEND_URL}v1/apply-tourism`, payloadObj);
    return this.http.post(`${BACKEND_URL}api/get-header-types`, payloadObj);
  }

  public generate_challan(payloadObj: FormData) {
    return this.http.post(`${BACKEND_URL}api/generate-challan`, payloadObj);
  }
  public Upload_challan(payloadObj: FormData) {
    return this.http.post(`${BACKEND_URL}api/upload-challan`, payloadObj);
  }

  public Generate_lisence(payloadObj: FormData) {
    return this.http.post(`${BACKEND_URL}api/issue-license`, payloadObj);
  }
  public Upload_lisence(payloadObj: FormData) {
    return this.http.post(`${BACKEND_URL}api/upload-license`, payloadObj);
  }

  public Get_all_Cities() {
    return this.http.get(`${BACKEND_URL}api/get-cities`);
  }
  public peakseasontypes() {
    return this.http.get(`${BACKEND_URL}api/peak-season-types`);
  }
  public ownershipnaturetypes() {
    return this.http.get(`${BACKEND_URL}api/ownership-nature-types`);
  }
}
