import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../service/authentification.service';

@Component({
  selector: 'app-unauthorized-espace-page',
  templateUrl: './unauthorized-espace-page.component.html',
  styleUrls: ['./unauthorized-espace-page.component.css']
})
export class UnauthorizedEspacePageComponent implements OnInit {

  constructor(private authentificationService: AuthentificationService,private router: Router) { }

  utilisateur: string;

  ngOnInit() {
  	this.utilisateur=this.authentificationService.getUserType(this.authentificationService.getUserinSession());
  	this.authentificationService.clearUserType();
	this.authentificationService.setUserType(this.utilisateur);
  }

  redirectAcceuil() {
  	this.authentificationService.redirectionWithUserType(this.utilisateur);
  }

}
