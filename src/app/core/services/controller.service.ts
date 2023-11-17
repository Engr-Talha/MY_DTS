import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BACKEND_URL } from '../constants/constants';
@Injectable({
  providedIn: 'root',
})
export class ControllerService {
  constructor(private http: HttpClient) {}

  public getAlluserApplications(userID?: any) {
    return this.http.get(`${BACKEND_URL}v1/apply-tourism/all?pageNo=0&limit=10`);
  }

  // http://localhost:3001/v1/apply-tourism/controller-inspection/1?status=Approved&user_id=sdf&comment=asfdadsf

  public Inspectionbycontroller(application_id?: any, status?: any, user_id?: any, comment?: any) {
    return this.http.get(
      `${BACKEND_URL}v1/apply-tourism/controller-inspection/${application_id}?status=${status}&user_id=${user_id}&comment=${comment}`,
    );
  }

  public Inspectortocontroller(formdata: FormData, application_id?: any, status?: any, user_id?: any, comment?: any) {
    return this.http.post(
      `${BACKEND_URL}v1/apply-tourism/inspector-inspection/${application_id}?status=${status}&user_id=${user_id}&comment=${comment}`,
      formdata,
    );
  }

  public DPTInspectionbycontroller(application_id?: any, status?: any, user_id?: any, comment?: any) {
    return this.http.get(
      `${BACKEND_URL}v1/apply-tourism/controller-inspection/${application_id}?status=${status}&user_id=${user_id}&comment=${comment}`,
    );
  }
}
