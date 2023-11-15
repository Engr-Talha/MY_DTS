import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ChartModule } from 'primeng/chart';
import { LayoutRoutingModule } from './layout-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from 'src/app/core/interceptor/auth.interceptor';
@NgModule({
  imports: [
    LayoutRoutingModule,
    ReactiveFormsModule,
    ProgressBarModule,
    FormsModule,
    ToastModule,
    DropdownModule,
    ChartModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    ButtonModule,
    TableModule,
    CalendarModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 20,
      space: -10,
      maxPercent: 100,
      outerStrokeGradient: true,
      outerStrokeWidth: 10,
      outerStrokeColor: '#6072D7',
      outerStrokeGradientStopColor: '#6072D7',
      innerStrokeColor: '#EDEEFE',
      innerStrokeWidth: 10,
      title: 'UI',
      animateTitle: false,
      animationDuration: 1000,
      showTitle: true,
      showUnits: true,
      showBackground: false,
      showSubtitle: false,
      responsive: false,
      titleFontSize: '32',
      lazy: false,
    }),
  ],
  providers: [HttpClientModule],
})
export class LayoutModule {}
