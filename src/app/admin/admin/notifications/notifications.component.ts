import { Component, OnInit } from '@angular/core';
import { GestionClientsService } from '../../../service/gestionClients.service';
import { Client } from '../../../modeles/Client';

import { Clients } from '../../../modeles/Clients';
import { EventEmitter, Input, Output} from '@angular/core';



@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
  providers: [GestionClientsService]
})


export class NotificationsComponent implements OnInit {

	nbNotAttributedClients: number;
  notificatioNotAttributedClients: String;

constructor(private gestionClientsService: GestionClientsService) { }
	
  

  ngOnInit() {
  	this.getNbOfClientsNotAttributed();
    this.notificationColorChange();

  }

  getNbOfClientsNotAttributed() {
  	this.nbNotAttributedClients = this.gestionClientsService.getNumberOfNotAttClients();
  }

  notificationColorChange() {
    if (this.nbNotAttributedClients === 0) {
        this.notificatioNotAttributedClients = "alert-info";
    }
    else { this.notificatioNotAttributedClients = "alert-danger" }

  }

}