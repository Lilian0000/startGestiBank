import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/';
import { AuthentificationService } from "../service/authentification.service";
import { EventEmitter, Input, Output} from '@angular/core';
import { User } from '../modeles/User';

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
	userType: string;
	userForm;
	//@Output() notifySideBar: EventEmitter<any> = new EventEmitter();
	
	constructor(private router: Router,
		private authentificationService: AuthentificationService) { }

	ngOnInit() { 
		this.userType = this.authentificationService.getUserType(this.authentificationService.getUserinSession());
  	if (this.userType !== "guest")
  	{
  		this.authentificationService.redirectionWithUserType(this.userType);
  	}
		this.guestConnexionForm = new FormGroup({
			email: new FormControl('', [
				Validators.required,
				Validators.pattern("[^ @]*@[^ @]*")
				]),
			password: new FormControl('', Validators.required),
			rememberMe: new FormControl('')
		});
		
	}

	onSubmit() {
		console.log(this.guestConnexionForm.value);
		console.log(this.guestConnexionForm.value.rememberMe);
		if(this.guestConnexionForm.valid) {
			this.userForm= new User(null, null, null, this.guestConnexionForm.controls['email'].value, this.guestConnexionForm.controls['password'].value, null, null);
			this.authentificationService.getUserAtConnexion(this.userForm).subscribe(user => {this.user=user;
				this.authentificationService.clearUserType();
				if (this.guestConnexionForm.value.rememberMe) {
					this.authentificationService.inputUserInLocalSession(this.user);
				}
				else {
					this.authentificationService.inputUserInTempSession(this.user);
				}
				this.authentificationService.setUserType(this.authentificationService.getUserType(this.user));
				this.authentificationService.connexionRedirection(this.user);
			
			}, error => {
					if (error.status == 0) {this.errorMessage = "Le Serveur ne répond pas. Veuillez réassayer ultérieurement."}
						else {
						this.errorMessage = "Email ou mot de passe incorrect!";}} );		
					}
	}

	Cancel() {
		this.router.navigate(['']);
	}
}




