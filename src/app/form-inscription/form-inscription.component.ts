import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionClientsService } from "../service/gestionClients.service";
import { AuthentificationService } from "../service/authentification.service";
import { Observable } from 'rxjs/';
import { Client } from '../modeles/Client';


@Component({
	selector: 'app-form-inscription',
	templateUrl: './form-inscription.component.html',
	styleUrls: ['./form-inscription.component.css'],
	providers: [GestionClientsService]
})
export class FormInscriptionComponent implements OnInit {

	id: number;
	client: Client;
	clientForm: FormGroup;
	userType: string;

	constructor(private route: ActivatedRoute, 
		private router: Router, 
		private gestionClients: GestionClientsService,
		private authentificationService: AuthentificationService) { }

	ngOnInit() {
		this.userType = this.authentificationService.getUserType(this.authentificationService.getUserinSession());
  	if (this.userType !== "guest")
  	{
  		this.authentificationService.redirectionWithUserType(this.userType);
  	}

		this.clientForm = new FormGroup({
			firstName: new FormControl('', Validators.required),
			lastName: new FormControl('', Validators.required),
			email: new FormControl('', [
				Validators.required,
				Validators.pattern("[^ @]*@[^ @]*")
				]),
			password: new FormControl('', Validators.required),
			address: new FormControl('', Validators.required),
			phonenumber: new FormControl('', Validators.required),
		});
	}

	onSubmit() {
		if(this.clientForm.valid) {
			let client: Client = new Client(this.id,
				this.clientForm.controls['firstName'].value,
				this.clientForm.controls['lastName'].value,
				this.clientForm.controls['email'].value,
				this.clientForm.controls['password'].value,
				this.clientForm.controls['address'].value,
				this.clientForm.controls['phonenumber'].value,
				null,
				0);
			this.gestionClients.addClient(client).subscribe(client => { 
				this.clientForm.reset();
				this.router.navigate(['/client']);
			});
			//this.gestionClients.idClientGenerator(client);
			
		}
	}

	redirectUserPage() {
		this.router.navigate(['']);
	}



}
