import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import { AuthService } from './auth.service'; // Replace this with your authentication service

@Injectable({
  providedIn: 'root',
})
export class RoleBasedAuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let Usertype = localStorage.getItem('user');
    const userDetails: number = JSON.parse(Usertype ? Usertype : '{}');
    // console.log('User Type:', this.accounttype);

    // const userDetails = this.authService.getUserDetails(); // Fetch user details from your authentication service

    console.log('in router guards', userDetails);
    if (userDetails) {
      switch (userDetails) {
        case 1:
          this.router.navigate(['/']);
          return true;
        case 2:
          this.router.navigate(['/controller-dashboard']);
          return true;
        case 3:
          this.router.navigate(['/inspector-dashboard']);
          return true;
        case 4:
          this.router.navigate(['/dptcontroller-dashboard']);
          return true;
        case 5:
          this.router.navigate(['/astcontroller-dashboard']);
          return true;
        case 6:
          this.router.navigate(['/reviewer-dashboard']);
          return true;
        default: // Or handle unauthorized access
          this.router.navigate(['/error/404']);
          return false;
      }
    } else {
      this.router.navigate(['/login']); // Redirect to login if user details are not available
      return false;
    }
  }
}
