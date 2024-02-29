import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ControllerService } from 'src/app/core/services/controller.service';
import { ActivatedRoute } from '@angular/router';
import { TouristGuideService } from 'src/app/core/services/tourist-guide.service';
import { UserApplicationService } from 'src/app/core/services/user-application.service';
import { SharedService } from 'src/app/core/services/shared.service';
import { forkJoin } from 'rxjs';
import { CommonModule } from '@angular/common';
import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';
@Component({
  selector: 'app-generatechallan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generatechallan.component.html',
  styleUrls: ['./generatechallan.component.scss'],
})
export class GeneratechallanComponent {
  @Input({ required: true }) applicationID!: number;
  constructor(
    private TouristGuideService: TouristGuideService,
    private ActivatedRoute: ActivatedRoute,
    private ControllerService: ControllerService,
    private messageService: MessageService,
    private UserApplicationService: UserApplicationService,
    private SharedService: SharedService,
  ) {}

  SelectedApplication: any;
  // applicationID: any;
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
  ShowButton: boolean = true;
  downloading: boolean = false; // Track download state

  downloadAs(format: string) {
    this.ShowButton = false; // Hide the button while downloading
    const container = document.querySelector('.challan-container') as HTMLElement; // Cast to HTMLElement
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
        link.download = 'challan.png';
        link.click();
      }

      this.ShowButton = true; // Show the button again after downloading
    });
  }
}
