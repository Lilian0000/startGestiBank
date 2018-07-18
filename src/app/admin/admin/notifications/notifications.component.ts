import { Component, OnInit } from '@angular/core';
import { GestionClientsService } from '../../../service/gestionClients.service';
import { GestionConseillersService } from '../../../service/gestionConseillers.service';
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
  nbOfConseillers: number;
  notificationNotAttributedClients: string;
  nbOfClients:number;

  constructor(private gestionClientsService: GestionClientsService, private gestionConseillersService: GestionConseillersService) { }

  ngOnInit() {

    
    this.gestionClientsService.getNumberOfNotAttClients().subscribe(nbNotAttributed => {this.nbNotAttributedClients=nbNotAttributed;
       this.notificationColorChange();
      }, 
      error => {console.log(error);}
      );
    this.gestionConseillersService.getNbOfConseiller().subscribe(nbOfConseillers => {this.nbOfConseillers=nbOfConseillers;},
      error => {console.log(error);}
      );
    this.gestionClientsService.getNbOfClients().subscribe(nbOfClients => {this.nbOfClients=nbOfClients;},
      error => {console.log(error);}
      );
  }

    notificationColorChange() {
      if (this.nbNotAttributedClients == 0) {
        this.notificationNotAttributedClients = "alert-info";
      }
      else { this.notificationNotAttributedClients = "alert-danger";
    }
  }
    notAttributedClientsExist() {
      if (this.nbNotAttributedClients !== 0) {
        return false;
      }
      else {
        return true;
      }
    }
}