import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-listing',
  templateUrl: './application-listing.component.html',
  styleUrls: ['./application-listing.component.scss'],
})
export class ApplicationListingComponent {
  constructor(private route: Router) {}
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

  tableHeaders = ['Code', 'Name', 'Category', 'Status', 'Date'];

  NavigateTo(link: any) {
    this.route.navigate([link]);
  }
}
