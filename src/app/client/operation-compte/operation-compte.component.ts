import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionClientsService } from "../../service/gestionClients.service";
import { Observable } from 'rxjs/';
import { Client } from '../../modeles/Client';
import { GestionComptesService } from '../../service/gestion-comptes.service'
import { AuthentificationService } from '../../service/authentification.service';


@Component({
	selector: 'app-operation-compte',
	templateUrl: './operation-compte.component.html',
	styleUrls: ['./operation-compte.component.css']
})
export class OperationCompteComponent implements OnInit {

	rib: number;
	id: number;
	operations;
	comptes;
	editOperationForm: FormGroup;

	constructor(private route: ActivatedRoute, 
		private router: Router, 
		private gestionClientsService: GestionClientsService, private gestionComptesService: GestionComptesService, private authentificationService: AuthentificationService) { 

	}

	ngOnInit() {
		this.route.parent.params.subscribe(params => {
			this.rib =  params["rib"];
		});

		this.gestionComptesService.getComptesByClient(this.authentificationService.getUserinSession().id).subscribe(comptes => {this.comptes=comptes;}
			, err => {console.log(err);} 
			);

		this.editOperationForm = new FormGroup({
			montant: new FormControl('', Validators.required),
			compteEmetteur: new FormControl('', Validators.required),
			compteRecepteur: new FormControl('', Validators.required)
		})
		, err => {console.log(err);};
	}

	onSubmit() {
		if(this.editOperationForm.valid) {

			this.editOperationForm.reset();
			this.router.navigate(['/client']);
		}
	}

	addOperation(){
		this.gestionComptesService.addOperation(this.editOperationForm.controls['compteEmetteur'].value, this.editOperationForm.controls['compteRecepteur'].value, this.editOperationForm.controls['montant'].value).subscribe(comptes => {this.comptes=comptes;}
			, err => {console.log(err);} 
			);			
	}

	redirectComptePage() {
		this.router.navigate(['/client']);
	}

}
