import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ControllerService } from 'src/app/core/services/controller.service';
import { ActivatedRoute } from '@angular/router';
import { TouristGuideService } from 'src/app/core/services/tourist-guide.service';
@Component({
  selector: 'app-application-dpt',
  templateUrl: './application-dpt.component.html',
  styleUrls: ['./application-dpt.component.scss'],
  providers: [MessageService],
})
export class ApplicationDptComponent {
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
    this.TouristGuideService.getTouristguidebyID(id).subscribe(
      (res: any) => {
        this.SelectedApplication = res.data;

        console.log('====================================');
        console.log(res);
        console.log('====================================');
        // this.patchFormData();
      },
      (err: any) => {
        console.log('====================================');
        console.log(err);
        console.log('====================================');
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
  approve() {
    this.approvedialogbox = true;
    this.ControllerService.DPTInspectionbycontroller(
      this.applicationID,
      'Approved',
      this.userID,
      this.addcommentt,
    ).subscribe(
      (res) => {
        console.log('====================================');
        console.log(res);
        console.log('====================================');
      },
      (err) => {
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
    this.ControllerService.DPTInspectionbycontroller(
      this.applicationID,
      'Rejected',
      this.userID,
      this.addcommentt,
    ).subscribe(
      (res) => {
        console.log('====================================');
        console.log(res);
        console.log('====================================');
        this.showreject = false;
      },
      (err) => {
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