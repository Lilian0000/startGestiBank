import { Component, OnInit } from '@angular/core';
import { NotificationsComponent } from './notifications/notifications.component';
import { AuthentificationService } from '../../service/authentification.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

 constructor(private authentificationService: AuthentificationService) { }

  ngOnInit() {
  	this.authentificationService.clearUserType();
	this.authentificationService.setUserType('admin');
  }
 
}
