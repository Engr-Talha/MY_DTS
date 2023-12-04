import { Component, OnInit } from '@angular/core';
import { UserApplicationService } from 'src/app/core/services/user-application.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { BACKEND_URL } from 'src/app/core/constants/constants';
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

  userID: any;
  ngOnInit() {
    let Usertype = localStorage.getItem('userDetails');
    this.userID = JSON.parse(Usertype ? Usertype : '{}').id;
    this.GetAllNewApplications();
  }

  GetAllNewApplications() {
    this.UserApplicationService.getUserAllApplications().subscribe(
      (res: any) => {
        this.myApplication = res.tourist_guides;
        console.log('new applidS', this.myApplication);
      },
      (err: any) => {
        console.log('Error in gettting my applications', err);
      },
    );
  }
  generateChallan: boolean = false;
  selectShowApplication(data: any) {
    this.UserApplicationService.getUserApplicationsByID(data).subscribe(
      (res: any) => {
        this.SelectedApplication = res;
        console.log('====================================');
        console.log('selected application in user block ', this.SelectedApplication);

        console.log('====================================');
        this.showSingleApplications = !this.showSingleApplications;
        this.showAllApplications = !this.showAllApplications;

        const approvals = this.SelectedApplication.application.approvals;
        for (let i = 0; i < approvals.length; i++) {
          const fromRole = approvals[i].from_role.name;
          const toRole = approvals[i].to_role.name;

          if (fromRole === 'Deputy Controller' && toRole === 'Controller') {
            this.generateChallan = true;
            console.log('Generate Challan: Transition found');
          } else {
            console.log('No Transition: ', fromRole, ' to ', toRole);
          }
        }
      },
      (err: any) => {
        console.log('Error in gettting my applications', err);
      },
    );
  }
  generatechallan() {
    const newTabUrl = `/generate-challan`;
    window.open(newTabUrl, '_blank');
  }
  navigateTo(path: any) {
    this.Router.navigate([`/tourist-guide/edit/${path}`]);
  }
}
