import { Component, OnInit, Input, Pipe, PipeTransform} from '@angular/core';
import {GestionComptesService} from '../../service/gestion-comptes.service'
import { Router } from '@angular/router';
import { AuthentificationService } from '../../service/authentification.service';

@Component({
	selector: 'app-gestion-comptes',
	templateUrl: './gestion-comptes.component.html',
	styleUrls: ['./gestion-comptes.component.css']
})
export class GestionComptesComponent implements OnInit {

	comptes;

	constructor(private router: Router, private gestionComptesService: GestionComptesService, private authentificationService: AuthentificationService) { }

	ngOnInit() {
		this.getComptes();
	}

	getComptes() {
		this.gestionComptesService.getComptesByClient(this.authentificationService.getUserinSession().id).subscribe(comptes => {this.comptes = comptes.sort((obj1, obj2) => {
			if (obj1.rib > obj2.rib) {
				return 1;
			}

			if (obj1.rib < obj2.rib) {
				return -1;
			}

			return 0;});
	}
	, err => {console.log(err);} 
	);

	}

	editComptePage(rib: number) {
		this.router.navigate(['client/operations', rib]);
	}

	deleteCompte() {
		console.log("Supression de compte");
		this.gestionComptesService.deleteCompte(this.authentificationService.getUserinSession().id).subscribe(comptes => {this.comptes=comptes;}
			, err => {console.log(err);} 
			);
		console.log("Supression de compte fin");
	}

}
