import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionClientsService } from "../../../service/gestionClients.service";
import { Observable } from 'rxjs/';
import { Client } from '../../../modeles/Client';
import { Conseiller } from '../../../modeles/Conseiller';
import { GestionConseillersService } from '../../../service/gestionConseillers.service';
import { EventEmitter, Input, Output} from '@angular/core';


@Component({
	selector: 'app-attribute-client-to-conseiller',
	templateUrl: './attribute-client-to-conseiller.component.html',
	styleUrls: ['./attribute-client-to-conseiller.component.css'],
	providers: [GestionClientsService, GestionConseillersService]
})

export class AttributeClientToConseillerComponent implements OnInit {

	id: number;
	conseillers: Conseiller[];
	nbNotAttributedClients: number;
	private sub: any;
	client;

	constructor(private route: ActivatedRoute, 
		private router: Router, 
		private gestionConseillersService: GestionConseillersService, 
		private gestionClientsService: GestionClientsService) {}

	ngOnInit() {

		this.sub = this.route.params.subscribe(params => {
			this.id = +params['id'];
			this.gestionClientsService.getClientById(this.id).subscribe(client => {this.client=client;},
				error => {console.log(error);});
			}	
			);
			this.gestionConseillersService.getConseillers().subscribe(conseillers => {this.conseillers= conseillers;},
				error => {console.log(error);});
			this.gestionClientsService.getNumberOfNotAttClients().subscribe(nbofnotatt => {this.nbNotAttributedClients=nbofnotatt;},
				error => {console.log(error);});

		}
		
		AttributeConseiller(conseiller) {
			//console.log(this.nbNotAttributedClients);
			this.gestionConseillersService.attributeClientToConseiller(this.id, conseiller).subscribe(client => {
			if (this.nbNotAttributedClients == 1)
			{
				this.router.navigate(['admin'])
			}
			else {
				this.router.navigate(['admin/attribute_clients']);
			}
			},
				error =>  {console.log(error);});
		}

		Cancel() {
			this.router.navigate(['admin/attribute_clients']);
		}

	}

