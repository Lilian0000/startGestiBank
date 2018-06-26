import { Component, OnInit } from '@angular/core';
import { GestionClientsService } from '../../service/gestionClients.service';
import { Client } from '../../modeles/Client';
import { Router } from '@angular/router';
import { Clients } from '../../modeles/Clients';
import { Conseiller } from '../../modeles/Conseiller';
import { Conseillers } from '../../modeles/Conseillers';
import { EventEmitter, Input, Output} from '@angular/core';

@Component({
	selector: 'app-liste-client',
	templateUrl: './liste-client.component.html',
	styleUrls: ['./liste-client.component.css'],
	providers: [ GestionClientsService ]
})
export class ListeClientComponent implements OnInit {

	clients;
	@Input() conseiller;

	constructor(private router: Router, private gestionClientsService: GestionClientsService) { }

	ngOnInit() {
		this.getClients();
	}
	getClients() {
		this.clients = this.gestionClientsService.getClientsByConseiller(conseiller);
	}

}
