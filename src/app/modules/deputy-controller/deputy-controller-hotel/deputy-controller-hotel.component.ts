import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ControllerService } from 'src/app/core/services/controller.service';
import { ActivatedRoute } from '@angular/router';
import { TouristGuideService } from 'src/app/core/services/tourist-guide.service';
import { UserApplicationService } from 'src/app/core/services/user-application.service';
import { SharedService } from 'src/app/core/services/shared.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-deputy-controller-hotel',
  templateUrl: './deputy-controller-hotel.component.html',
  styleUrls: ['./deputy-controller-hotel.component.scss'],
})
export class DeputyControllerHotelComponent {
  uploadedImages: { url: string; name: string }[] = [];
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
    private SharedService: SharedService,
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
    this.UserApplicationService.getResturantApplicationsByID(id).subscribe(
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
  onFileChange(event: any) {
    const files = event.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = () => {
          this.uploadedImages.push({ url: reader.result as string, name: file.name });
        };

        reader.readAsDataURL(file);
      }
    }
  }

  removeImage(index: number) {
    this.uploadedImages.splice(index, 1);
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

  addcommentt: string;

  approvedialogbox: boolean = false;
  feeTypes: any[];
  selectedFeeTypes: any;
  approveDialogbox() {
    const data = new FormData();
    data.append('application_entity_type_id', this.SelectedApplication.application.application_entity_type_id);

    this.SharedService.get_header_types_of_challan(data).subscribe(
      (res: any) => {
        this.feeTypes = res.data;
        // console.log(res);
      },
      (err: any) => {},
    );
    this.approvedialogbox = true;
  }

  ChangeStatus(rolestobeSent: any) {
    // this.approvedialogbox = true;
    // const ids: string[] = this.selectedFeeTypes.map((item: FeeType) => item.id);

    // const obj: { [key: number]: number } = {};

    // for (let i = 0; i < ids.length; i++) {
    //   // Use Number(i) to convert the index to a number key
    //   obj[Number(i)] = Number(ids[i]);
    // }

    // console.log(obj); // { 0: 23, 1: 24, 2: 22 }

    // const challan_data = new FormData();
    // challan_data.append('application_entity_type_id', this.SelectedApplication.application.application_entity_type_id);
    // challan_data.append('application_id', this.applicationID);
    // challan_data.append('header_type_id', JSON.stringify(obj));

    const data = new FormData();

    // console.log(this.selectedFeeTypes);

    data.append('status', rolestobeSent);
    data.append('remarks', this.addcommentt);
    data.append('application_entity_type_id', this.SelectedApplication.application.application_entity_type_id);

    // const challanCall = this.SharedService.generate_challan(challan_data);
    const statusCall = this.UserApplicationService.changeStatus(this.applicationID, data);

    forkJoin([statusCall]).subscribe(
      ([statusRes]) => {
        // Handle success for both APIs
        // console.log('Challan response:', challanRes);
        console.log('Status response:', statusRes);

        // You can add comments, show messages, etc. based on the responses
        this.addcommentt = '';
        this.approvedialogbox = false;

        if (rolestobeSent === 1) {
          this.showSuccess('Application Approved', 'User Application Approved, Sent to Controller.');
        } else if (rolestobeSent === 3) {
          this.showError2('Application Rejected', 'Application is Rejected and Informed to User.');
        }
      },
      (error) => {
        // Handle error for any API
        console.error('Error:', error);

        // You can handle common errors or specific errors for each API here
        this.addcommentt = '';
        this.approvedialogbox = false;
      },
    );

    return;
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
      (res) => {
        // console.log('====================================');
        // console.log(res);
        // console.log('====================================');
        this.showreject = false;
      },
      (err) => {
        // console.log('====================================');
        // console.log(err);
        // console.log('====================================');
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

interface FeeType {
  id: number;
  name: string;
}
