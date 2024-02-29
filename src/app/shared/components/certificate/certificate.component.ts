import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ControllerService } from 'src/app/core/services/controller.service';
import { ActivatedRoute } from '@angular/router';
import { TouristGuideService } from 'src/app/core/services/tourist-guide.service';
import { UserApplicationService } from 'src/app/core/services/user-application.service';
import { SharedService } from 'src/app/core/services/shared.service';
import { forkJoin } from 'rxjs';
import { ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import html2canvas from 'html2canvas';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [CommonModule, DialogModule],
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss'],
})
export class CertificateComponent {
  @ViewChild('pdfContent', { static: false }) pdfContent!: ElementRef;
  constructor(
    private TouristGuideService: TouristGuideService,
    private ActivatedRoute: ActivatedRoute,
    private ControllerService: ControllerService,
    private messageService: MessageService,
    private UserApplicationService: UserApplicationService,
    private SharedService: SharedService,
  ) {}

  SelectedApplication: any;
  applicationID: any;
  userID: any;

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

  getApplicationbyID(id: any) {
    this.UserApplicationService.getUserApplicationsByID(id).subscribe(
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

  visible: boolean = false;
  Upload_lisence() {
    this.visible = true;
  }

  ShowButton: boolean = true;
  downloading: boolean = false; // Track download state

  downloadAs(format: string) {
    this.visible = true;
    this.ShowButton = false; // Hide the button while downloading
    const container = document.querySelector('.lisence-container') as HTMLElement; // Cast to HTMLElement
    if (!container) {
      console.error('Container element not found.');
      this.ShowButton = true; // Show the button again if the container is not found
      return;
    }

    html2canvas(container).then((canvas: any) => {
      if (format === 'png') {
        const imageData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = imageData;
        link.download = 'lisence.png';
        link.click();
      }

      this.ShowButton = true; // Show the button again after downloading
    });
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
    data.append('dts_license', this.selectedFile);
    data.append('challan_id', this.SelectedApplication.application.challans[0].id);
    data.append('license_id', this.SelectedApplication.application.license[0].license_number);
    data.append('application_id', this.SelectedApplication.application.id);
    data.append('attachment_type_id', '20');
    data.append('application_entity_type_id', this.SelectedApplication.application.application_entity_type_id);

    // Log form data for debugging
    console.log('FormData:', FormData);

    // Call the upload service
    this.SharedService.Upload_lisence(data).subscribe(
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
}
