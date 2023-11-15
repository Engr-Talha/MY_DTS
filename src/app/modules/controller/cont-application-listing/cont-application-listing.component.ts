import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface dropdownPending {
  name: string;
  code: string;
}

@Component({
  selector: 'app-cont-application-listing',
  templateUrl: './cont-application-listing.component.html',
  styleUrls: ['./cont-application-listing.component.scss'],
})
export class ContApplicationListingComponent implements OnInit {
  constructor(private route: Router) {}
  dateRangeFirst: Date | undefined;
  dateRangeSecond: Date | undefined;

  dropdown: dropdownPending[] | undefined;
  selecteddropdown: dropdownPending | undefined;
  ApplicationTypeDropdown: any[] | undefined;
  selectedApplicationTypeDropdown: any[] | undefined;

  SearchByName: any;
  SearchbyID: any;
  data2 = [
    {
      name: 'John',
      code: '123',
      Category: 'Hotel Registration',
      status: 'Pending',
      date: '2023-11-08',
    },
    {
      name: 'Alice',
      code: '456',
      Category: 'Restaurant Registration',
      status: 'Submitted',
      date: '2023-11-09',
    },
    {
      name: 'Bob',
      code: '789',
      Category: 'Travel Guide',
      status: 'Active',
      date: '2023-11-10',
    },
    {
      name: 'Mike',
      code: '321',
      Category: 'Travel Agency',
      status: 'Inactive',
      date: '2023-11-12',
    },
  ];

  selectedDate: string = ''; // To store the selected date
  dateOptions: { label: string; value: string }[] = [];

  filterByDate() {
    // Use this.selectedDate to filter data or perform any desired action
    // For demonstration, log the selected date to the console
    console.log('Selected Date:', this.selectedDate);
  }

  ngOnInit() {
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
    this.route.navigate([link]);
  }
}
