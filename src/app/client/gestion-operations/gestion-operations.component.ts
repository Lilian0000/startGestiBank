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
	rib: number;

	constructor(private route: ActivatedRoute, private router: Router, private gestionComptesService: GestionComptesService, private authentificationService: AuthentificationService) { }

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.rib = params['rib']} , err => {console.log(err);}
			);
		this.getOperations();
	}

	getOperations() {
		this.gestionComptesService.getOperationsByCompte(this.rib).subscribe(operations => {this.operations=operations.sort((obj1, obj2) => {
			if (obj1.id > obj2.id) {
				return 1;
			}

			if (obj1.id < obj2.id) {
				return -1;
			}

			return 0;});
		console.log(this.operations);
	}
	, err => {console.log(err);} 

	);
	}

	redirectOperationPage() {
		this.router.navigate(['/client/operations/'+this.rib+'/op']);
	}

	redirectComptePage() {
		this.router.navigate(['/client']);
	}
}
