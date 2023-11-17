import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userDetails: any;
  ngOnInit(): void {
    let Usertype = localStorage.getItem('userDetails');
    this.userDetails = JSON.parse(Usertype ? Usertype : '{}');
  }
}
