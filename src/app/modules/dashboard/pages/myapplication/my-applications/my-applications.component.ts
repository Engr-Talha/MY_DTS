import { Component } from '@angular/core';
import { UserApplicationService } from 'src/app/core/services/user-application.service';
@Component({
  selector: 'app-my-applications',
  templateUrl: './my-applications.component.html',
  styleUrls: ['./my-applications.component.scss'],
})
export class MyApplicationsComponent {
  constructor(private UserApplicationService: UserApplicationService) {}
}
