import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface dropdownPending {
  name: string;
  code: string;
}
import { ControllerService } from 'src/app/core/services/controller.service';
import { UserApplicationService } from 'src/app/core/services/user-application.service';
@Component({
  selector: 'app-reviewer-app-listing',
  templateUrl: './reviewer-app-listing.component.html',
  styleUrls: ['./reviewer-app-listing.component.scss'],
})
export class ReviewerAppListingComponent {
  myApplication: any;
  constructor(
    private UserApplicationService: UserApplicationService,
    private route: Router,
    private ControllerService: ControllerService,
  ) {}
  dateRangeFirst: Date | undefined;
  dateRangeSecond: Date | undefined;

  dropdown: dropdownPending[] | undefined;
  selecteddropdown: dropdownPending | undefined;
  ApplicationTypeDropdown: any[] | undefined;
  selectedApplicationTypeDropdown: any[] | undefined;
  ResturantApplications: any;
  TravelAgencyApplication: any;
  HotelApplications: any;

  SearchByName: any;
  SearchbyID: any;

  selectedDate: string = ''; // To store the selected date
  dateOptions: { label: string; value: string }[] = [];

  filterByDate() {
    // Use this.selectedDate to filter data or perform any desired action
    // For demonstration, log the selected date to the console
    console.log('Selected Date:', this.selectedDate);
  }

  ngOnInit() {
    this.UserApplicationService.getApplicationByRole().subscribe((res: any) => {
      this.myApplication = res;
      console.log(this.myApplication);
    });
    this.UserApplicationService.getApplicationByResturant().subscribe((res: any) => {
      this.ResturantApplications = res;
      console.log(this.ResturantApplications);
    });
    this.UserApplicationService.getApplicationByTravelAgency().subscribe((res: any) => {
      this.TravelAgencyApplication = res;
      console.log(this.TravelAgencyApplication);
    });
    this.UserApplicationService.getApplicationByHotel().subscribe((res: any) => {
      this.HotelApplications = res;
      console.log('Hotels', this.HotelApplications);
    });

    this.dropdown = [
      { name: 'Submitted Application', code: 'NY' },
      { name: 'Pending Application', code: 'RM' },
      { name: 'New Applications', code: 'LDN' },
    ];

    this.ApplicationTypeDropdown = [
      { name: 'Hotel Registration', code: 'NY' },
      { name: 'Tourist Guide', code: 'RM' },
      { name: 'Resturant Registration', code: 'LDN' },
      { name: 'Travel Agency', code: 'LDN' },
    ];
  }

  tableHeaders = ['Code', 'Name', 'Category', 'Status', 'Date'];

  // NavigateTo(linkParam1: any, linkParam2?: any) {
  //   this.route.navigate([`layout/reviewer-dashboard/reviewer-app-listing/${linkParam1}/${linkParam2}`]);
  // }
  NavigateTo(link: any) {
    this.route.navigate([`layout/reviewer-dashboard/reviewer-app-listing/${link}`]);
  }
  NavigateToResturant(link: any) {
    this.route.navigate([`layout/reviewer-dashboard/reviewer-app-resturant/${link}`]);
  }
  NavigateToTravelAgency(link: any) {
    this.route.navigate([`layout/reviewer-dashboard/reviewer-app-travelagency/${link}`]);
  }
  NavigateToHotel(link: any) {
    this.route.navigate([`layout/reviewer-dashboard/reviewer-app-hotel/${link}`]);
  }
  formatDate(dateString: any) {
    if (!dateString) return ''; // handle case when dateString is undefined or null

    const dateObject = new Date(dateString);

    // Format the date as desired (e.g., DD-MM-YYYY HH:MM:SS)
    const formattedDate = `${dateObject.getDate().toString().padStart(2, '0')}-${(dateObject.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${dateObject.getFullYear()} ${dateObject.getHours().toString().padStart(2, '0')}:${dateObject
      .getMinutes()
      .toString()
      .padStart(2, '0')}:${dateObject.getSeconds().toString().padStart(2, '0')}`;

    return formattedDate;
  }
}
