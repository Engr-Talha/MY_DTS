import { Component, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginSignUpService } from 'src/app/core/services/login-sign-up.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  standalone: true,
  providers: [MessageService],
  imports: [FormsModule, RouterLink, ReactiveFormsModule, AngularSvgIconModule, ToastModule],
})
export class SignUpComponent implements OnInit {
  constructor(
    private Router: Router,
    private LoginSignUpService: LoginSignUpService,
    private messageService: MessageService,
    private readonly _formBuilder: FormBuilder,
  ) {}

  form!: FormGroup;

  fullName: any;
  email: any;
  password: any;
  confirmPassword: any;
  cnic: any;
  roleId: any = 1;

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      fullName: ['', Validators.required],
      cnic: ['', Validators.required],
    });
  }
  get f() {
    return this.form.controls;
  }

  signup() {
    const { email, password, fullName, confirmPassword, cnic } = this.form.value;
    const formData = new FormData();
    formData.append('user_name', fullName);
    formData.append('email', email);
    formData.append('role_id', this.roleId);
    formData.append('password_confirmation', confirmPassword);
    formData.append('password', password);
    formData.append('cnic', cnic);

    this.LoginSignUpService.signup(formData).subscribe(
      (res: any) => {
        console.log('====================================');
        console.log(res);
        console.log('====================================');
        this.messageService.add({
          severity: 'info',
          summary: 'Account Created',
          detail: 'Your Account is Created Successfully',
        });
        this.Router.navigate(['/auth/sign-in']);
      },
      (err: any) => {
        // this.messageService.add({ severity: 'error', summary:. 'Error', detail: 'Error' });

        console.log('====================================');
        console.log('error in signup', err.error.error);
        console.log('====================================');
        this.showError(err?.error?.error);
      },
    );
  }
  showError(errormessage: any) {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: errormessage });
  }
  showSuccess(summary: any, success: any) {
    this.messageService.add({ severity: 'success', summary: summary, detail: success });
  }
}
