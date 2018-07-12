import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/';
import { AuthentificationService } from "../service/authentification.service";
import { EventEmitter, Input, Output} from '@angular/core';
@Component({
	selector: 'app-form-connexion',
	templateUrl: './form-connexion.component.html',
	styleUrls: ['./form-connexion.component.css'],
	providers: []
})
export class FormConnexionComponent implements OnInit {
	email: string;
	user;
	guestConnexionForm: FormGroup;
	errorMessage : String;

	//@Output() notifySideBar: EventEmitter<any> = new EventEmitter();
	
	constructor(private router: Router,
		private authentificationService: AuthentificationService) { }

	ngOnInit() { 
		//console.log(this.authentificationService.getUserInTempSession());
		//console.log(this.authentificationService.getUserInLocalSession());
		//pour michel
		//console.log(this.authentificationService.getUserType(this.authentificationService.getUserinSession()));
		//console.log(this.authentificationService.isConnected());
		this.guestConnexionForm = new FormGroup({
			email: new FormControl('', [
				Validators.required,
				Validators.pattern("[^ @]*@[^ @]*")
				]),
			password: new FormControl('', Validators.required),
		});
		
	}

	onSubmit() {

		console.log(this.guestConnexionForm.value)
		if(this.guestConnexionForm.valid) {


			this.authentificationService.getUserAtConnexion(this.guestConnexionForm.value).subscribe(user => {this.user=user;

				this.authentificationService.inputUserInLocalSession(this.user);
				this.authentificationService.inputUserInTempSession(this.user);
				/*console.log(this.authentificationService.getUserInTempSession());
				console.log(this.authentificationService.getUserInLocalSession());
				console.log("Connexion réussi!");*/
				//this.notifySideBar.emit(this.authentificationService.getUserType(this.user));
				this.authentificationService.clearUserType();
				this.authentificationService.setUserType(this.authentificationService.getUserType(this.user));
				this.authentificationService.connexionRedirection(this.user);
			
			}, error => {
				//console.log("Email ou mot de passe erroné!");
				//console.log(error); console.log(error.status);
					if (error.status == 0) {this.errorMessage = "Le Serveur ne répond pas. Veuillez réassayer ultérieurement."}
						else {
						this.errorMessage = "Email ou mot de passe incorrect!";}} );		
					}
	}
}




