import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../service/authentification.service';

@Component({
  selector: 'app-conseiller',
  templateUrl: './conseiller.component.html',
  styleUrls: ['./conseiller.component.css']
})
export class ConseillerComponent implements OnInit {

  constructor(private authentificationService: AuthentificationService) { }

  ngOnInit() {
  	this.authentificationService.clearUserType();
	this.authentificationService.setUserType('conseiller');
  }

}
