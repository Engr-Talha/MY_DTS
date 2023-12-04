import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface dropdownPending {
  name: string;
  code: string;
}
import { ControllerService } from 'src/app/core/services/controller.service';
import { UserApplicationService } from 'src/app/core/services/user-application.service';
@Component({
  selector: 'app-application-listing',
  templateUrl: './application-listing.component.html',
  styleUrls: ['./application-listing.component.scss'],
})
export class ApplicationListingComponent {
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
    this.UserApplicationService.getApplicationByRole().subscribe(
      (res: any) => {
        this.myApplication = res;
        console.log(this.myApplication);
      },
      (err: any) => {
        console.log('Error in gettting my applications', err);
      },
    );

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

  NavigateTo(link: any) {
    this.route.navigate([`/inspector-dashboard/user-applications/${link}`]);
  }
}
