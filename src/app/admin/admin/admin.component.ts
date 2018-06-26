import { Component, OnInit } from '@angular/core';
import { NotificationsComponent } from './notifications/notifications.component';
import {PasswordModule} from 'primeng/password';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

 constructor() { }

  ngOnInit() {
  }
 
}
