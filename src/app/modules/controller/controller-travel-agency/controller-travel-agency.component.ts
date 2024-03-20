import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ControllerService } from 'src/app/core/services/controller.service';
import { ActivatedRoute } from '@angular/router';
import { TouristGuideService } from 'src/app/core/services/tourist-guide.service';
import { UserApplicationService } from 'src/app/core/services/user-application.service';
import { SharedService } from 'src/app/core/services/shared.service';
import { forkJoin } from 'rxjs';
// import html2canvas from 'html2canvas';
// import { jsPDF } from 'jspdf';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
declare var require: any;
const htmlToPdfmake = require('html-to-pdfmake');
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-controller-travel-agency',
  templateUrl: './controller-travel-agency.component.html',
  styleUrls: ['./controller-travel-agency.component.scss'],
})
export class ControllerTravelAgencyComponent {
  @ViewChild('pdfContent', { static: false }) pdfContent!: ElementRef;
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
    this.UserApplicationService.getTravelAgencyByID(id).subscribe(
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

  feeTypes: any[];
  selectedFeeTypes: any;
  HeadersChallan() {
    const data = new FormData();
    data.append('application_entity_type_id', this.SelectedApplication.application.application_entity_type_id);

    this.SharedService.get_header_types_of_challan(data).subscribe(
      (res: any) => {
        this.feeTypes = res.data;
        // console.log(res);
      },
      (err: any) => {},
    );
    // this.approvedialogbox = true;
  }
  approvedialog: boolean = false;

  GenerateChallanFlag: boolean = false;
  GenerateChallan() {
    this.HeadersChallan();
    this.GenerateChallanFlag = true;
    const ids: string[] = this.selectedFeeTypes.map((item: FeeType) => item.id);
    // this.approvedialogbox = true;
    const obj: { [key: string]: any } = {}; // Object allows string keys with any value
    for (let i = 0; i < ids.length; i++) {
      obj[`header_type_id[${i}]`] = ids[i];
    }
    const challan_data = new FormData();
    challan_data.append('application_entity_type_id', this.SelectedApplication.application.application_entity_type_id);
    challan_data.append('application_id', this.SelectedApplication.application.id);

    for (const [key, value] of Object.entries(obj)) {
      // Iterate through object entries
      challan_data.append(key, value); // Append each key-value pair
    }

    this.SharedService.generate_challan(challan_data).subscribe(
      (res: any) => {
        console.log('====================================');
        console.log('res', res);
        console.log('====================================');
        this.showSuccess('Challan Generated', 'User Application Approved, Challan Generated.');
        this.GenerateChallanFlag = false;
      },
      (err: any) => {
        console.log('====================================');
        console.log('err', err);
        this.showSuccess('Challan Generation Error', 'User Application Error.');

        console.log('====================================');
        this.GenerateChallanFlag = false;
      },
    );
  }

  ChangeStatus(rolestobeSent: any) {
    // this.approvedialog = true;

    const data = new FormData();

    data.append('status', rolestobeSent);
    data.append('remarks', this.addcommentt);
    data.append('application_entity_type_id', this.SelectedApplication.application.application_entity_type_id);

    this.UserApplicationService.changeStatus(this.applicationID, data).subscribe(
      (res) => {
        console.log('====================================');
        console.log(res);
        console.log('====================================');
        this.addcommentt = '';
        this.approvedialog = false;
        if (rolestobeSent == 1) {
          this.showSuccess('Application Approved', 'User Application Approved');
        } else if (rolestobeSent == 3) {
          this.showError2('Application Rejected', 'Application is Rejected and Informed to User.');
        }
      },
      (err) => {
        console.log('====================================');
        console.log(err);
        console.log('====================================');
        this.addcommentt = '';
        this.approvedialog = false;
      },
    );
  }

  // GenerateLisence() {}

  GenerateLisence() {
    const data = new FormData();

    data.append('challan_id', this.SelectedApplication.application.challans[0].id);
    data.append('application_id', this.SelectedApplication.application.id);
    this.SharedService.Generate_lisence(data).subscribe(
      (response: any) => {},
      (err: any) => {},
    );

    const newTabUrl = `Show-Certificate/${this.SelectedApplication.data.id}`;
    window.open(newTabUrl, '_blank');
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
  @ViewChild('pdfTable')
  pdfTable!: ElementRef;

  public downloadAsPDF() {
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download();
  }

  // public convetToPDF() {
  //   let DATA: any = document.getElementById('contentToConvert');
  //   html2canvas(DATA).then((canvas) => {
  //     let fileWidth = 208;
  //     let fileHeight = (canvas.height * fileWidth) / canvas.width;
  //     console.log(fileHeight);
  //     const FILEURI = canvas.toDataURL('image/png');
  //     let PDF = new jsPDF('p', 'mm', 'a4');
  //     let position = 0;
  //     PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
  //     PDF.save('angular-demo.pdf');
  //   });
  // }
}
interface FeeType {
  id: number;
  name: string;
}
