import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Component, OnInit } from '@angular/core';
import { LoginSignUpService } from 'src/app/core/services/login-sign-up.service';
import { MenuService } from 'src/app/modules/layout/services/menu.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  standalone: true,
  providers: [MessageService],
  imports: [FormsModule, ReactiveFormsModule, RouterLink, AngularSvgIconModule, NgClass, NgIf],
})
export class SignInComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  passwordTextType!: boolean;
  private hasReloaded = false;
  constructor(
    private LoginSignUpServicegin: LoginSignUpService,
    private readonly _formBuilder: FormBuilder,
    private readonly _router: Router,
    private menuService: MenuService,
    private messageService: MessageService,
  ) {}

  ngOnInit(): void {
    localStorage.clear();
    sessionStorage.clear();
    this.form = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }
  UserDetails: any;
  onSubmit() {
    this.submitted = true;
    const { email, password } = this.form.value;
    // console.log('form values', email, password);
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    let data = {
      usernameOremail: email,
      password: password,
    };
    if (this.form.valid) {
      this.LoginSignUpServicegin.signin(formData).subscribe(
        (res: any) => {
          this.UserDetails = res.user;
          localStorage.setItem('token', JSON.stringify(res.access_token.accessToken));
          console.log('====================================');
          console.log(res);
          console.log('====================================');
          localStorage.setItem('userDetails', JSON.stringify(this.UserDetails));
          console.log('====================================');
          console.log(this.UserDetails);
          localStorage.setItem('user', JSON.stringify(this.UserDetails?.role_id));
          console.log('====================================');

          this.LoginSignUpServicegin.getalltourists().subscribe(
            (res: any) => {
              console.log('====================================');
              console.log(res);
              console.log('====================================');
            },
            (err: any) => {
              console.log('====================================');
              console.log(err);
              this.showError('Error in Signin', err.error);
              console.log('====================================');
            },
          );

          if (this.UserDetails?.role_id == 1) {
            this._router.navigate(['/']);
            // localStorage.setItem('user', '1');
          } else if (this.UserDetails.role_id == 3) {
            this._router.navigate(['/inspector-dashboard']);
            // localStorage.setItem('user', '2');
          } else if (this.UserDetails.role_id == 2) {
            this._router.navigate(['/controller-dashboard']);
            // localStorage.setItem('user', '3');
          } else if (this.UserDetails.role_id == 4) {
            this._router.navigate(['/dptcontroller-dashboard']);
            // localStorage.setItem('user', '4');
          } else if (this.UserDetails.role_id == 6) {
            this._router.navigate(['/reviewer-dashboard']);
            // localStorage.setItem('user', '4');
          } else if (this.UserDetails.role_id == 5) {
            this._router.navigate(['/astcontroller-dashboard']);
            // localStorage.setItem('user', '4');
          }
          this.menuService.loadMenu();

          // this.UserDetails = res.user;
          // localStorage.setItem('token',JSON.stringify(this.UserDetails) )
          // console.log('====================================');
          // console.log(res);
          // console.log('====================================');
          // localStorage.setItem('userDetails', JSON.stringify(this.UserDetails));
          // console.log('====================================');
          // console.log(this.UserDetails);
          // localStorage.setItem('user', JSON.stringify(this.UserDetails?.roles.id));
          // console.log('====================================');
          // if (this.UserDetails?.roles.id == 1) {
          //   this._router.navigate(['/']);
          //   // localStorage.setItem('user', '1');
          // } else if (this.UserDetails.roles.id == 3) {
          //   this._router.navigate(['/inspector-dashboard']);
          //   // localStorage.setItem('user', '2');
          // } else if (this.UserDetails.roles.id == 2) {
          //   this._router.navigate(['/controller-dashboard']);
          //   // localStorage.setItem('user', '3');
          // } else if (this.UserDetails.roles.id == 4) {
          //   this._router.navigate(['/dptcontroller-dashboard']);
          //   // localStorage.setItem('user', '4');
          // }
          // this.menuService.loadMenu();
        },
        (err: any) => {
          console.log('====================================');
          console.log('error in signin', err);
          console.log('====================================');
        },
      );

      // stop here if form is invalid
    }
  }

  showError(summary: any, errormessage: any) {
    this.messageService.add({ severity: 'error', summary: summary, detail: errormessage });
  }
  showSuccess(summary: any, success: any) {
    this.messageService.add({ severity: 'success', summary: summary, detail: success });
  }
}
