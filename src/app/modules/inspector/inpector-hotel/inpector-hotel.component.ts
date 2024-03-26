import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ControllerService } from 'src/app/core/services/controller.service';
import { ActivatedRoute } from '@angular/router';
import { TouristGuideService } from 'src/app/core/services/tourist-guide.service';
import { UserApplicationService } from 'src/app/core/services/user-application.service';
@Component({
  selector: 'app-inpector-hotel',
  templateUrl: './inpector-hotel.component.html',
  styleUrls: ['./inpector-hotel.component.scss'],
})
export class InpectorHotelComponent {
  uploadedImages: { url: string }[] = [];
  addcommentt: any = '';
  onFileChange(event: any) {
    const files = event.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = () => {
          this.uploadedImages.push({ url: reader.result as string });
        };

        reader.readAsDataURL(file);
      }
    }
  }

  removeImage(index: number) {
    this.uploadedImages.splice(index, 1);
  }

  DocumentDialog: boolean = false;
  applicationID: any;
  SelectedApplication: any;
  userID: any;
  constructor(
    private TouristGuideService: TouristGuideService,
    private ActivatedRoute: ActivatedRoute,
    private ControllerService: ControllerService,
    private messageService: MessageService,
    private UserApplicationService: UserApplicationService,
  ) {}

  ngOnInit() {
    this.ActivatedRoute.params.subscribe((params: any) => {
      this.applicationID = params.id;
      if (this.applicationID > 0) {
        this.getApplicationbyID(this.applicationID);
        // Call the function here or wherever appropriate
      } else {
        this.applicationID = -1;
      }
    });

    let Usertype = localStorage.getItem('userDetails');
    this.userID = JSON.parse(Usertype ? Usertype : '{}').id;
  }

  convertImageUrl(apiImageUrl: string): string {
    // Replace backslashes with forward slashes and escape special characters
    const convertedUrl = apiImageUrl.replace(/\\/g, '/').replace(/\t/g, '');

    // Check if the link starts with 'localhost' and prepend 'http://' if needed
    if (convertedUrl.startsWith('localhost')) {
      return `http://${convertedUrl}`;
    }

    // If the link doesn't start with 'localhost', return the original link
    return apiImageUrl;
  }

  getApplicationbyID(id: any) {
    this.UserApplicationService.getHotelByID(id).subscribe(
      (res: any) => {
        this.SelectedApplication = res;
        console.log('====================================');
        console.log('selected application in user block ', this.SelectedApplication);
        console.log('====================================');
      },
      (err: any) => {
        console.log('Error in gettting my applications', err);
      },
    );
  }
  ChangeStatus(rolestobeSent: any) {
    // this.approvedialogbox = true;

    const data = new FormData();

    data.append('status', rolestobeSent);
    data.append('remarks', this.addcommentt);
    data.append('attachment', JSON.stringify(this.uploadedImages));
    data.append('application_entity_type_id', this.SelectedApplication.application.application_entity_type_id);

    this.UserApplicationService.changeStatus(this.applicationID, data).subscribe(
      (res) => {
        console.log('====================================');
        console.log(res);
        console.log('====================================');
        this.addcommentt = '';
        this.approvedialogbox = false;
        if (rolestobeSent == 1) {
          this.showSuccess(
            'Application Approved',
            'User Application Approved, sent to the Deputy Controller for further checking.',
          );
        } else if (rolestobeSent == 3) {
          this.showError2('Application Rejected', 'Application is Rejected and Informed to User.');
        }
      },
      (err) => {
        console.log('====================================');
        console.log(err);
        console.log('====================================');
        this.addcommentt = '';
        this.approvedialogbox = false;
      },
    );
  }

  docnam: any;
  docpath: any;
  OpenDialog(docnam: any, docpath: any) {
    this.DocumentDialog = true;
    this.docnam = docnam;
    this.docpath = docpath;
  }

  addCommentDialog: boolean = false;

  addcomment: any;
  addComment() {
    this.addCommentDialog = true;
  }

  approvedialogbox: boolean = false;
  approve() {
    this.approvedialogbox = true;
    const formdata = new FormData();

    formdata.append('inspectionAttachment', JSON.stringify(this.uploadedImages));

    this.ControllerService.Inspectortocontroller(
      formdata,
      this.applicationID,
      'Approved',
      this.userID,
      this.addcommentt,
    ).subscribe(
      (res: any) => {
        this.addcommentt = '';
        console.log('====================================');
        console.log(res);
        console.log('====================================');
      },
      (err: any) => {
        this.addcommentt = '';
        console.log('====================================');
        console.log(err);
        console.log('====================================');
      },
    );
    this.approvedialogbox = false;
  }

  showreject: boolean = false;
  reject() {
    this.showreject = true;
    this.ControllerService.Inspectionbycontroller(
      this.applicationID,
      'Rejected',
      this.userID,
      this.addcommentt,
    ).subscribe(
      (res: any) => {
        console.log('====================================');
        console.log(res);
        console.log('====================================');
        this.showreject = false;
      },
      (err: any) => {
        console.log('====================================');
        console.log(err);
        console.log('====================================');
        this.showreject = false;
      },
    );
  }

  showError2(summary: any, errormessage: any) {
    this.messageService.add({ severity: 'error', summary: summary, detail: errormessage });
  }

  showSuccess(summary: any, success: any) {
    this.messageService.add({ severity: 'success', summary: summary, detail: success });
  }

  showInfo() {
    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content' });
  }

  showWarn() {
    this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Message Content' });
  }

  showError(errormessage: any) {
    this.messageService.add({ severity: 'error', summary: 'Document Rejected', detail: errormessage });
  }
}