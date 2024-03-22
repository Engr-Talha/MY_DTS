import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Component, OnInit } from '@angular/core';
import { LoginSignUpService } from 'src/app/core/services/login-sign-up.service';
import { MenuService } from 'src/app/modules/layout/services/menu.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Console, error } from 'console';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, AngularSvgIconModule, NgClass, NgIf, ToastModule],
})
export class ForgotPasswordComponent implements OnInit {
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
  ShowOTPScreen: boolean = false;
  ngOnInit(): void {
    localStorage.clear();
    sessionStorage.clear();
    this.form = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    const { email } = this.form.value;
    // console.log('form values', email, password);
    const formData = new FormData();
    formData.append('email', email);

    let data = {
      email: email,
    };

    this.LoginSignUpServicegin.forgotPassword(formData).subscribe(
      (res: any) => {
        console.log(res);
        alert('OTP has been sent to your email.\n' + res.meta.message);
        this.ShowOTPScreen = true;
      },
      (err: any) => {
        console.log(err);
        this.ShowOTPScreen = false;

        if (err.error && err.error.errors && err.error.errors.email) {
          // Get the error message
          const errorMessage = err.error.errors.email[0];
          // Display the error message using a prompt or alert
          alert(errorMessage);
        } else {
          // Handle other types of errors or display a generic error message
          console.log('An error occurred:', err.error.meta.errors.email[0]);
          alert(err.error.meta.errors.email[0]);
        }
      },
    );
  }
}
