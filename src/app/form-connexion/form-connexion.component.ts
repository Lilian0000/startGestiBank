import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/';
import { AuthentificationService } from "../service/authentification.service";

@Component({
	selector: 'app-form-connexion',
	templateUrl: './form-connexion.component.html',
	styleUrls: ['./form-connexion.component.css'],
	providers: [AuthentificationService]
})
export class FormConnexionComponent implements OnInit {
	email: string;
	user;
	guestSubscribeForm: FormGroup;

	constructor(private router: Router,
		private authentificationService: AuthentificationService) { }

	ngOnInit() { 
		console.log(this.authentificationService.getUserInTempSession());
		console.log(this.authentificationService.getUserInLocalSession());
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
			this.user = this.authentificationService.getUserAtConnexion(this.guestSubscribeForm.controls['email'].value,
			this.guestSubscribeForm.controls['password'].value);

			//console.log(this.user);

			if (this.user == null)
			{
				console.log("Email ou mot de passe erroné!");
			}
			
			else
			{	
				this.authentificationService.inputUserInLocalSession(this.user);
				this.authentificationService.inputUserInTempSession(this.user);
				console.log(this.authentificationService.getUserInTempSession());
				console.log(this.authentificationService.getUserInLocalSession());
				console.log("Connexion réussi!");
				this.authentificationService.connexionRedirection(this.user);
			}			
		}
	}


}
