import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionClientsService } from "../service/gestionClients.service";
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

	constructor(private route: ActivatedRoute, 
		private router: Router, 
		private gestionClients: GestionClientsService) { }

	ngOnInit() {

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

		if(this.id) {
			this.gestionClients.getClientById(this.id);
		}
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
				null);
			this.gestionClients.addClient(client);
			this.clientForm.reset();
			this.router.navigate(['/client']);
		}
	}

	redirectUserPage() {
		this.router.navigate(['/connexion']);
	}



}
