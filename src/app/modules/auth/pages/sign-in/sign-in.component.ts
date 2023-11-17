import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Component, OnInit } from '@angular/core';
import { LoginSignUpService } from 'src/app/core/services/login-sign-up.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, AngularSvgIconModule, NgClass, NgIf],
})
export class SignInComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  passwordTextType!: boolean;

  constructor(
    private LoginSignUpServicegin: LoginSignUpService,
    private readonly _formBuilder: FormBuilder,
    private readonly _router: Router,
  ) {}

  ngOnInit(): void {
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
    console.log('form values', email, password);

    let data = {
      usernameOremail: email,
      password: password,
    };
    if (this.form.valid) {
      this.LoginSignUpServicegin.signin(data).subscribe(
        (res: any) => {
          this.UserDetails = res.user;
          localStorage.setItem('userDetails', JSON.stringify(this.UserDetails));
          console.log('====================================');
          console.log(this.UserDetails);
          localStorage.setItem('user', JSON.stringify(this.UserDetails?.roles.id));
          console.log('====================================');
        },
        (err: any) => {
          console.log('====================================');
          console.log('error in signin', err);
          console.log('====================================');
        },
      );

      // stop here if form is invalid

      if (this.UserDetails?.roles.id == 1) {
        this._router.navigate(['/']);
        // localStorage.setItem('user', '1');
      } else if (this.UserDetails.roles.id == 3) {
        this._router.navigate(['/inspector-dashboard']);
        // localStorage.setItem('user', '2');
      } else if (this.UserDetails.roles.id == 2) {
        this._router.navigate(['/controller-dashboard']);
        // localStorage.setItem('user', '3');
      } else if (this.UserDetails.roles.id == 4) {
        this._router.navigate(['/dptcontroller-dashboard']);
        // localStorage.setItem('user', '4');
      }
    }
  }
}
