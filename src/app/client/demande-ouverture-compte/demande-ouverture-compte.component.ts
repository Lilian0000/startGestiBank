import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DemandeOuvertureCompte } from '../../modeles/DemandeOuvertureCompte';
import { Client } from '../../modeles/Client';
import { AuthentificationService } from '../../service/authentification.service';
import { GestionClientsService } from '../../service/gestionClients.service';

@Component({
  selector: 'app-demande-ouverture-compte',
  templateUrl: './demande-ouverture-compte.component.html',
  styleUrls: ['./demande-ouverture-compte.component.css']
})
export class DemandeOuvertureCompteComponent implements OnInit {

	DemandeForm: FormGroup;
	demandeOuvertureCompte: DemandeOuvertureCompte;
	client: Client;
	constructor(private router: Router, private authentificationService: AuthentificationService, private gestionClientsService: GestionClientsService) {}

  ngOnInit() {
  	this.client = this.authentificationService.getUserinSession();
  	this.DemandeForm = new FormGroup ({
  		description: new FormControl(""),
  	});
  }

  onSubmit() {
	this.demandeOuvertureCompte = new DemandeOuvertureCompte(null, this.client.id, this.client.idConseiller, this.DemandeForm.value.description);
	this.gestionClientsService.demandeOuvertureCompted(this.demandeOuvertureCompte).subscribe(demandeOuvertureCompte => {
		console.log(demandeOuvertureCompte);
		this.router.navigate(['/demandeSuccessPage']);
	}, error => {console.log(error);
    this.router.navigate(['/errorPage']);
  });
  }

  Cancel() {
    this.router.navigate(['/client']);
  }

}
