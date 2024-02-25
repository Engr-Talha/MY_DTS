import { NgModule } from '@angular/core';
import { ToastModule } from 'primeng/toast';

import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [AuthRoutingModule, HttpClientModule, ToastModule, AngularSvgIconModule.forRoot()],
})
export class AuthModule {}
