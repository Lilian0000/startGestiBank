import { Component, OnInit } from '@angular/core';
import { GestionConseillersService } from '../../../service/gestionConseillers.service';
import {AuthentificationService} from '../../../service/authentification.service';
import {GestionDemandesService} from '../../../service/gestion-demandes.service';



@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
  providers: [GestionConseillersService, AuthentificationService, GestionDemandesService]
})
export class NotificationsComponent implements OnInit {

  nbDemandes : number;
  nbOfClients : number;


  constructor(private gestionConseillersService: GestionConseillersService, private authentificationService: AuthentificationService) { }

  ngOnInit() {
  	let idConseiller: number = this.authentificationService.getUserinSession().id;
  	
  	   this.gestionConseillersService.getClientsByConseiller(idConseiller).subscribe(clients => {this.nbOfClients=clients.length;
       
      }, 
      error => {console.log(error);}
      );

  }

}
