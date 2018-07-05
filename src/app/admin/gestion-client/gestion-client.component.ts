import { Component, OnInit } from '@angular/core';
import { GestionClientsService } from '../../service/gestionClients.service';
import { Client } from '../../modeles/Client';
import { Router } from '@angular/router';
import { Clients } from '../../modeles/Clients';
import { EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-gestion-client',
  templateUrl: './gestion-client.component.html',
  styleUrls: ['./gestion-client.component.css'],
  providers: []
})
export class GestionClientComponent implements OnInit {

  
  clients;

  @Input() client;
  
  constructor(private router: Router, private gestionClientsService: GestionClientsService) { }
  
  ngOnInit() {
  	this.getClients();
  }
  getClients() {
  	this.clients = this.gestionClientsService.getClients();
  }
  redirectNewClientPage() {
  	this.router.navigate(['admin/gestion_client/add_client']);
  }
  editClientPage(client) {
  	if (client) {
  		this.router.navigate(['admin/gestion_client/edit_client', client.id]);
  	}
  }
  onDelete(client) {
  	{
  		this.gestionClientsService.deleteClient(client);
  	}
  }
}
