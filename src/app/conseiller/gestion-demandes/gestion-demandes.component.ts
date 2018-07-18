import { Component, OnInit } from '@angular/core';
import {GestionDemandesService} from './../../service/gestion-demandes.service';
import {DemandeOuvertureCompte} from '../../modeles/DemandeOuvertureCompte';
import {AuthentificationService} from './../../service/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-demandes',
  templateUrl: './gestion-demandes.component.html',
  styleUrls: ['./gestion-demandes.component.css'],
  providers: [GestionDemandesService]
})
export class GestionDemandesComponent implements OnInit {

  demandes: DemandeOuvertureCompte[];
  id_c: number;

  constructor(private router: Router, private gestionDemandesService: GestionDemandesService, private authentificationService: AuthentificationService) { }

  ngOnInit() {
  	this.getDemandes();

  }

  getDemandes(){
  	  	this.id_c=this.authentificationService.getUserinSession().id;
  		this.gestionDemandesService.getDemandesByConseiller(this.id_c).subscribe(
  		demandes=>{this.demandes=demandes;
  		console.log(this.demandes);
  	});
  }
  	
  refuser(demande: DemandeOuvertureCompte){
  	this.gestionDemandesService.deleteDemande(this.id_c, demande.id).subscribe(res=>{
  		this.getDemandes();
  		this.router.navigate(['conseillers/gestion_demandes']);
  		});
  }

  accepterDemande(demande: DemandeOuvertureCompte){
  		this.gestionDemandesService.accepterDemande(demande).subscribe(res=>{
  			console.log(res);
  			 this.getDemandes();
  			this.router.navigate(['conseillers/gestion_demandes']);
  		});
  }
}
