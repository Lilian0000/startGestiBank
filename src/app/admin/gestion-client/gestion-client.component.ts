import { Component, OnInit } from '@angular/core';
import { GestionClientsService } from '../../service/gestionClients.service';
import { GestionConseillersService } from '../../service/gestionConseillers.service';
import { Client } from '../../modeles/Client';
import { Router } from '@angular/router';
import { Clients } from '../../modeles/Clients';
import { EventEmitter, Input, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestion-client',
  templateUrl: './gestion-client.component.html',
  styleUrls: ['./gestion-client.component.css'],
  providers: []
})
export class GestionClientComponent implements OnInit {

  clients;
  conseiller;
  
  constructor(private router: Router, private gestionClientsService: GestionClientsService, private gestionConseillersService: GestionConseillersService) { }

  ngOnInit() {
    this.getClients();

  }
  getClients() {
    this.gestionClientsService.getClients().subscribe(clients => {this.clients=clients;}
      , err => {console.log(err);} 
      );
  }
  redirectNewClientPage() {
    this.router.navigate(['admin/add_client']);
  }
  editClientPage(client) {
    if (client) {
      this.router.navigate(['admin/edit_client', client.id]);
    }
  }
  onDelete(client) {
    {

      this.gestionClientsService.deleteClient(client.id).subscribe(
        res => {
          this.getClients();
          this.router.navigate(['admin/gestion_client']);
        });

    }
  }
  unAttributeClient(client) {
    this.gestionConseillersService.unAttributeClientToConseiller(client.idConseiller, client).subscribe(
      boolean => {this.getClients();}, error => {console.log(error)});
  }

  isAttributed(client): boolean{
    if (client.idConseiller == 0)
    {
      return false;
    }
    else {
      return true;
    }
  }
}
