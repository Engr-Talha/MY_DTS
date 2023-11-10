import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inspector-dashboard',
  templateUrl: './inspector-dashboard.component.html',
  styleUrls: ['./inspector-dashboard.component.scss'],
})
export class InspectorDashboardComponent {
  datatable: any;
  constructor(private router: Router) {
    this.data = [
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
  }
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
  gotoPage(data: string) {
    this.router.navigate([data]);
  }
  data: any;

  options2: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: ['Application Remainings', 'Applications Submitted'],
      datasets: [
        {
          data: [200, 50, 100],
          backgroundColor: ['#20C0A0', '#6072D7'],
          borderWidth: 2,
          hoverBackgroundColor: ['#20C0A0', '#6072D7'],
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
    this.cities = [
      { name: 'Hotel Registration Application', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
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
  showvisibleTravelGuide() {
    this.visibleTravelGuide = true;
  }
  showvisibleResturant() {
    this.visibleResturant = true;
  }
  NavigateTo(link: any) {
    this.router.navigate([link]);
  }
}
