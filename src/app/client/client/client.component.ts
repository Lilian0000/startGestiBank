import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../service/authentification.service';

@Component({
	selector: 'app-client',
	templateUrl: './client.component.html',
	styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

	constructor(private authentificationService: AuthentificationService) { }

	ngOnInit() {
		console.log("client component is loading");
		this.authentificationService.clearUserType();
		this.authentificationService.setUserType("client");
		
	}

}