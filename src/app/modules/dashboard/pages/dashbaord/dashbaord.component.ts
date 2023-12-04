import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ControllerService } from 'src/app/core/services/controller.service';

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.scss'],
})
export class DashbaordComponent {
  constructor(private router: Router, private ControllerService: ControllerService) {}

  gotoPage(data: string) {
    this.router.navigate([data]);
  }
  data: any;

  options2: any;
  UserID: any;
  myApplication: any;
  myApplicationStatuses: any;
  myapplicationtypes: any;
  verificationCount: number[] = [0, 0, 0, 0];
  labels: any[] = ['Tourist Guide', 'Hotel Reg', 'Resturant Reg', 'Travel Agency'];

  ngOnInit() {
    let Usertype = localStorage.getItem('userDetails');
    this.UserID = JSON.parse(Usertype ? Usertype : '{}').id;
    this.cities = [
      { name: 'Hotel Registration Application', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];

    return;
    this.ControllerService.getuserApplications(this.UserID).subscribe(
      (res: any) => {
        this.myApplication = res.data;

        this.myapplicationtypes = this.myApplication.map((item: any) => item.application_status);
        console.log('====================================');
        console.log(this.myapplicationtypes);
        console.log('====================================');
        this.myapplicationtypes.forEach((status: any) => {
          switch (status.verification_type.Name) {
            case 'Tourist-Guide':
              this.verificationCount[0]++;
              break;
            case 'Hotel':
              this.verificationCount[1]++;
              break;
            case 'Restaurant':
              this.verificationCount[2]++;
              break;
            case 'Travel-Agency':
              this.verificationCount[3]++;
              break;
            default:
              break;
          }
        });

        console.log('====================================');
        console.log(this.verificationCount);
        console.log('====================================');
        this.updatechart();
        console.log(this.myApplication);
      },
      (err: any) => {
        console.log('Error in gettting my applications', err);
      },
    );
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: ['Tourist Guide', 'Hotel Reg', 'Resturant Reg', 'Travel Agency'],
      datasets: [
        {
          data: [this.verificationCount],
          backgroundColor: ['#20C0A0', '#6072D7', '#F4845F'],
          borderWidth: 2,
          hoverBackgroundColor: ['#20C0A0', '#6072D7', '#F4845F'],
        },
      ],
    };

    this.options2 = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor,
          },
        },
      },
    };
  }

  cities: any | undefined;

  selectedCity: any | undefined;

  visibleHotel: boolean = false;
  visibleTravelAgency: boolean = false;
  visibleTravelGuide: boolean = false;
  visibleResturant: boolean = false;

  showHotelDialog() {
    this.visibleHotel = true;
  }
  showvisibleTravelAgency() {
    this.visibleTravelAgency = true;
  }

  updatechart() {
    this.data = {
      labels: ['Tourist Guide', 'Hotel Reg', 'Resturant Reg', 'Travel Agency'],
      datasets: [
        {
          data: [this.verificationCount],
          backgroundColor: ['#20C0A0', '#6072D7', '#F4845F'],
          borderWidth: 2,
          hoverBackgroundColor: ['#20C0A0', '#6072D7', '#F4845F'],
        },
      ],
    };
  }
  showvisibleTravelGuide() {
    this.visibleTravelGuide = true;
  }
  showvisibleResturant() {
    this.visibleResturant = true;
  }
}
