import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from '../modeles/Client';
import { GestionClientsService } from "../service/gestionClients.service";
import { Observable } from 'rxjs/';

@Component({
	selector: 'app-form-connexion',
	templateUrl: './form-connexion.component.html',
	styleUrls: ['./form-connexion.component.css'],
	providers: [GestionClientsService]
})
export class FormConnexionComponent implements OnInit {
	email: string;
	client: Client;
	guestSubscribeForm: FormGroup;

	constructor(private router: Router, private gestionClientService: GestionClientsService) { }

	ngOnInit() { 
		this.guestSubscribeForm = new FormGroup({
			email: new FormControl('', [
				Validators.required,
				Validators.pattern("[^ @]*@[^ @]*")
				]),
			password: new FormControl('', Validators.required),
		});
	}

	onSubmit() {
		if(this.guestSubscribeForm.valid) {
			this.client = this.gestionClientService.getClientByMail(this.guestSubscribeForm.controls['email'].value);
			console.log(this.client);
			if (this.client == null)
			{
				console.log("Email erroné!");
			}
			else if (this.client.password != this.guestSubscribeForm.controls['password'].value)
			{
				console.log("Mot de passe erroné!");
			}
			else
			{
				console.log("Connexion réussi!");
				this.router.navigate(['/admin']);
			}			
		}
	}


}
