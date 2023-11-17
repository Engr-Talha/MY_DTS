import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
interface Column {
  field: string;
  header: string;
}
import { ControllerService } from 'src/app/core/services/controller.service';

@Component({
  selector: 'app-controller-dashbaord',
  templateUrl: './controller-dashbaord.component.html',
  styleUrls: ['./controller-dashbaord.component.scss'],
})
export class ControllerDashbaordComponent {
  datatable: any;
  cols!: Column[];

  constructor(private router: Router, private ControllerService: ControllerService) {
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

    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' },
      { field: 'date', header: 'Date' },
      { field: '', header: '' },
    ];
  }

  tableHeaders = ['Code', 'Name', 'Category', 'Status', 'Date'];
  gotoPage(data: string) {
    this.router.navigate([data]);
  }
  data: any;
  Tabledata: any;

  options2: any;
  myApplication: any;
  ngOnInit() {
    this.ControllerService.getAlluserApplications().subscribe(
      (res: any) => {
        this.myApplication = res.data;
        console.log(this.myApplication);
      },
      (err: any) => {
        console.log('Error in gettting my applications', err);
      },
    );
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
    this.Tabledata = [
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

  NavigateTo(link: any) {
    this.router.navigate([link]);
  }

  NavigateToo(link: any) {
    this.router.navigate([`/controller-dashboard/userCont-application-listing/${link}`]);
  }
}
