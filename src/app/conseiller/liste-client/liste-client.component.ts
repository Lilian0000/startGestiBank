import { Component, OnInit } from '@angular/core';
import { GestionConseillersService} from '../../service/gestionConseillers.service';
import { Client } from '../../modeles/Client';
import { Router } from '@angular/router';
import { Clients } from '../../modeles/Clients';
import { Conseiller } from '../../modeles/Conseiller';
import { Conseillers } from '../../modeles/Conseillers';
import { EventEmitter, Input, Output} from '@angular/core';
import { AuthentificationService } from '../../service/authentification.service';
import {GestionClientsService} from '../../service/gestionClients.service';

@Component({
	selector: 'app-liste-client',
	templateUrl: './liste-client.component.html',
	styleUrls: ['./liste-client.component.css'],
	providers: [ GestionConseillersService]
})
export class ListeClientComponent implements OnInit {

	clients;
	conseiller;

	constructor(private router: Router, private gestionClientsService: GestionClientsService, private gestionConseillersService: GestionConseillersService, private authentificationService: AuthentificationService) 
		{ this.conseiller = this.authentificationService.getUserinSession(); }

	ngOnInit() {
		this.getClients();
	}
	getClients() {

	this.gestionConseillersService.getClientsByConseiller(this.conseiller.id).subscribe(clients => this.clients=clients);
	}

	  onDelete(client) {
	  this.gestionClientsService.deleteClient(client.id).subscribe(
	    res => {
	      this.getClients();
	      this.router.navigate(['conseiller/gestion_client']);
	    });
}

  editClientPage(client) {
    if (client) {
      this.router.navigate(['conseiller/edit_client', client.id]);
    }
  }



}
