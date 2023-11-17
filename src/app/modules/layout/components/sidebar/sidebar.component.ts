import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/core/services/theme.service';
import packageJson from '../../../../../../package.json';
import { MenuService } from '../../services/menu.service';
import { Router, RouterLink } from '@angular/router';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [NgClass, NgIf, AngularSvgIconModule, SidebarMenuComponent, RouterLink],
})
export class SidebarComponent implements OnInit {
  public appJson: any = packageJson;

  constructor(private router: Router, public themeService: ThemeService, public menuService: MenuService) {}

  ngOnInit(): void {}

  public toggleSidebar() {
    this.menuService.toggleSidebar();
  }

  toggleTheme() {
    this.themeService.theme = !this.themeService.isDark ? 'dark' : 'light';
  }
  public logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('userDetails');
    this.router.navigate(['/auth']);
  }
}
