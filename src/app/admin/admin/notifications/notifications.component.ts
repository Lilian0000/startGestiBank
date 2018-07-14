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
  notificationNotAttributedClients: string;
  notifMessage: string;

  constructor(private gestionClientsService: GestionClientsService) { }

  ngOnInit() {
    this.gestionClientsService.getNumberOfNotAttClients().subscribe(nbNotAttributed => {this.nbNotAttributedClients=nbNotAttributed;
       this.notificationColorChange();
      }, 
      error => {console.log(error);}
      );
  }

    notificationColorChange() {
      if (this.nbNotAttributedClients == 0) {
        this.notificationNotAttributedClients = "alert-info";
        this.notifMessage = "";
      }
      else { this.notificationNotAttributedClients = "alert-danger";
      this.notifMessage = ": Clické pour les attribuer" }

    }
}