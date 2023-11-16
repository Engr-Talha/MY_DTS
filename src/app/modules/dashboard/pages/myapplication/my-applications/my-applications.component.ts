import { Component, OnInit } from '@angular/core';
import { UserApplicationService } from 'src/app/core/services/user-application.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-my-applications',
  templateUrl: './my-applications.component.html',
  styleUrls: ['./my-applications.component.scss'],
  providers: [MessageService],
})
export class MyApplicationsComponent implements OnInit {
  constructor(private UserApplicationService: UserApplicationService, private Router: Router) {}
  myApplication: any;
  showAllApplications: boolean = true;
  showSingleApplications: boolean = false;
  SelectedApplication: any;

  userID: any = 1;
  ngOnInit() {
    this.GetAllNewApplications();
  }

  GetAllNewApplications() {
    this.UserApplicationService.getAlluserApplications(this.userID).subscribe(
      (res: any) => {
        this.myApplication = res.data;
        console.log(this.myApplication);
      },
      (err: any) => {
        console.log('Error in gettting my applications', err);
      },
    );
  }
  selectShowApplication(data: any) {
    this.showSingleApplications = !this.showSingleApplications;
    this.showAllApplications = !this.showAllApplications;
    this.SelectedApplication = data;
  }
  navigateTo(path: any) {
    this.Router.navigate([path]);
  }
}
