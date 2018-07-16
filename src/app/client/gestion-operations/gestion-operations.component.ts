import { Component, OnInit, Input } from '@angular/core';
import {GestionComptesService} from '../../service/gestion-comptes.service'
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from '../../service/authentification.service';
import { Operation } from '../../modeles/Operation';

@Component({
	selector: 'app-gestion-operations',
	templateUrl: './gestion-operations.component.html',
	styleUrls: ['./gestion-operations.component.css']
})
export class GestionOperationsComponent implements OnInit {

	operations;
	private sub: any;
	rib: number;

	constructor(private route: ActivatedRoute, private router: Router, private gestionComptesService: GestionComptesService, private authentificationService: AuthentificationService) { }

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			this.rib = params['rib'] , err => {console.log(err);}
		});
		this.getOperations();
	}

	getOperations() {
		this.gestionComptesService.getOperationsByCompte(this.rib).subscribe(operations => {this.operations=operations;
		console.log(this.operations);
		}
		, err => {console.log(err);} 
		);
	}

	addOperation(){
		console.log("Ajout d'opération");
		this.gestionComptesService.addOperation(this.rib, 100).subscribe(operations => {this.operations=operations;}
			, err => {console.log(err);} 
			);
		console.log("Ajout d'opération fin");
	}

}
