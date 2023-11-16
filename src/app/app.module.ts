import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor } from './core/interceptor/auth.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ChartModule } from 'primeng/chart';
import { CommonModule } from '@angular/common';
import { ScrollerModule } from 'primeng/scroller';

import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PasswordModule } from 'primeng/password';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { AccordionModule } from 'primeng/accordion';
import { StepsModule } from 'primeng/steps';
import { MenuItem, MessageService } from 'primeng/api';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { TagModule } from 'primeng/tag';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ResponsiveHelperComponent } from './shared/components/responsive-helper/responsive-helper.component';

import { MenuModule } from 'primeng/menu';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

@NgModule({
  declarations: [
    AppComponent,

    // PathwayComponent,
  ],
  imports: [
    ResponsiveHelperComponent,
    GalleriaModule,
    TagModule,
    CarouselModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    RippleModule,
    ChartModule,
    InputTextModule,
    BrowserAnimationsModule,
    PasswordModule,
    CalendarModule,
    DropdownModule,
    AccordionModule,
    StepsModule,
    BrowserModule,
    CommonModule,
    ScrollerModule,
    DialogModule,
    HttpClientModule,
    ToggleButtonModule,
    ToastModule,
    ProgressSpinnerModule,
    ScrollPanelModule,

    MenuModule,

    //QuestModule,

    DynamicDialogModule,
    NgCircleProgressModule.forRoot({
      radius: 60,
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
      responsive: true,
      titleFontSize: '32',
      lazy: false,
    }),
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
