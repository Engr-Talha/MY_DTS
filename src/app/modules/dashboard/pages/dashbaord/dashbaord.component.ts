import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.scss'],
})
export class DashbaordComponent {
  constructor(private router: Router) {}

  gotoPage(data: string) {
    this.router.navigate([data]);
  }
  data: any;

  options2: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: ['Tourist Guide', 'Hotel Reg', 'Resturant Reg', 'Travel Agency'],
      datasets: [
        {
          data: [200, 50, 100],
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
}
