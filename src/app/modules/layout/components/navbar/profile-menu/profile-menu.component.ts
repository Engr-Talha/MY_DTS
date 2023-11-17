import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { ClickOutsideDirective } from '../../../../../shared/directives/click-outside.directive';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss'],
  standalone: true,
  imports: [ClickOutsideDirective, NgClass, RouterLink],
})
export class ProfileMenuComponent implements OnInit {
  public isMenuOpen = false;
  accounttype: any;
  constructor(private router: Router) {
    let Usertype = localStorage.getItem('userDetails');
    this.accounttype = JSON.parse(Usertype ? Usertype : '{}');
  }

  ngOnInit(): void {}

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('userDetails');
    this.router.navigate(['/auth']);
  }
}
