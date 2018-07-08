import { Component, OnInit } from '@angular/core';
import { GestionClientsService } from '../../service/gestionClients.service';
import { Client } from '../../modeles/Client';
import { Router } from '@angular/router';
import { Clients } from '../../modeles/Clients';
import { Conseiller } from '../../modeles/Conseiller';
import { Conseillers } from '../../modeles/Conseillers';
import { EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-attribute-clients',
  templateUrl: './attribute-clients.component.html',
  styleUrls: ['./attribute-clients.component.css'],
  providers: [ GestionClientsService ]
})
export class AttributeClientsComponent implements OnInit {

	clients;
	@Input() client;

  constructor(private router: Router, private gestionClientsService: GestionClientsService) { }

  ngOnInit() {
  	this.getClients();
      
  }
  getClients() {
  	this.clients = this.gestionClientsService.getNotAttributedClients();
  }
  AttributeClientToConseiller(client) {
      this.router.navigate(['admin/attribute_clients/attribute_client_to_conseiller', client.id]);
    }
}
