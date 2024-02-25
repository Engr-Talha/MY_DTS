import { Component, OnInit } from '@angular/core';
import { UserApplicationService } from 'src/app/core/services/user-application.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { BACKEND_URL } from 'src/app/core/constants/constants';
import { SharedService } from 'src/app/core/services/shared.service';
@Component({
  selector: 'app-my-applications',
  templateUrl: './my-applications.component.html',
  styleUrls: ['./my-applications.component.scss'],
  providers: [MessageService],
})
export class MyApplicationsComponent implements OnInit {
  constructor(
    private UserApplicationService: UserApplicationService,
    private Router: Router,
    private SharedService: SharedService,
  ) {}
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
  docnam: any;
  docpath: any;
  DocumentDialog: boolean = false;

  OpenDialog(docnam: any, docpath: any) {
    this.DocumentDialog = true;
    this.docnam = docnam;
    this.docpath = docpath;
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

        // const approvals = this.SelectedApplication.application.approvals;
        if (this.SelectedApplication.application.is_challan_issued) {
          this.generateChallan = true;
        } else this.generateChallan = false;
      },
      (err: any) => {
        console.log('Error in gettting my applications', err);
      },
    );
  }
  generatechallan() {
    const newTabUrl = `/generate-challan/${this.SelectedApplication.data.id}`;
    window.open(newTabUrl, '_blank');
  }

  selectedFile: File | null = null;
  uploadedImageUrl: string | null = null;

  UploadChallan(imageInput: any): void {
    const file: File | null = imageInput.files[0];

    // Ensure a file is selected
    if (!file) {
      console.error('No file selected.');
      return;
    }

    // Read the file using FileReader
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.uploadedImageUrl = event.target.result;
    };
    reader.readAsDataURL(file);

    this.selectedFile = file;
  }

  submitForm(): void {
    console.log('====================================');
    console.log(this.SelectedApplication);
    console.log('====================================');
    if (!this.selectedFile) {
      console.error('No file selected.');
      return;
    }

    // Create FormData
    const data = new FormData();
    data.append('dts_challan', this.selectedFile);
    data.append('challan_id', this.SelectedApplication.application.challans[0].id);
    data.append('application_id', this.SelectedApplication.application.id);
    data.append('attachment_type_id', '19');
    data.append('application_entity_type_id', this.SelectedApplication.application.application_entity_type_id);

    // Log form data for debugging
    console.log('FormData:', FormData);

    // Call the upload service
    this.SharedService.Upload_challan(data).subscribe(
      (res: any) => {
        console.log(res);
        // Optionally reset form state or perform other actions upon successful upload
      },
      (err: any) => {
        console.error(err);
        // Handle error
      },
    );
  }

  navigateTo(path: any) {
    this.Router.navigate([`/tourist-guide/edit/${path}`]);
  }
}

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}
