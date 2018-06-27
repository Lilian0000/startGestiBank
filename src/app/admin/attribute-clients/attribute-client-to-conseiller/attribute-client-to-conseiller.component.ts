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
	client: Client;
	conseillers;
	private sub: any;
	@Input() conseiller;

	constructor(private route: ActivatedRoute, 
		private router: Router, 
		private gestionConseillersService: GestionConseillersService, 
		private gestionClientsService: GestionClientsService) { }

	ngOnInit() {
	this.getConseillers();
	this.sub = this.route.params.subscribe(params => {
    this.id = +params['id'];});
	this.client=this.gestionClientsService.getClientById(this.id);
	}

	getConseillers() {
		this.conseillers = this.gestionConseillersService.getConseillers();
	}

	AttributeConseiller(conseiller) {
		this.gestionClientsService.attributeClientToConseiller(this.client, conseiller.id);
		if (this.gestionClientsService.getNumberOfNotAttClients() == 0)
		{
			this.router.navigate(['admin'])
		}
		else {
			this.router.navigate(['admin/attribute_clients']);
		}
	}

}

