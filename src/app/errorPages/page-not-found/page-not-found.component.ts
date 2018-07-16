import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../service/authentification.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

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
