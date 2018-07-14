import { Injectable } from '@angular/core';
import { User } from '../modeles/User';
import { Clients } from '../modeles/Clients';
import { Client } from '../modeles/Client';
import { Conseillers } from '../modeles/Conseillers';
import { Conseiller } from '../modeles/Conseiller';
import { Admin } from '../modeles/Admin';
import { Admins } from '../modeles/Admins';
import { Routes, RouterModule, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { EventEmitter, Input, Output} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from "@angular/http";

@Injectable()
export class AuthentificationService {
	
	constructor(private router: Router, private http: Http) {}
	private apiUrl = 'http://localhost:9090/GestBankBack/users/connexion';

	getUserAtConnexion(form): Observable<Boolean | {}> {

		return  this.http.post(this.apiUrl, form).pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error)));
	}

	connexionRedirection(user) {
		console.log(user);
		if (user.matricule) {
			if (user.fonction) {
				this.router.navigate(['/admin']);
			}
			else {this.router.navigate(['/conseiller']);}
		}
		else if (user.numeroclient) {
			this.router.navigate(['/client']);
			console.log('i go to client');
		}
		else { this.router.navigate([''])}
	}
//session permatente jusqu'à logout() : "Remember Me" 
inputUserInLocalSession(user) {
	localStorage.setItem('Token', JSON.stringify(user));				
}

//session s'arretant quand on quitte le navigateur
inputUserInTempSession(user) {
	sessionStorage.setItem('Token', JSON.stringify(user));
}

getUserInLocalSession() {
	return JSON.parse(localStorage.getItem('Token'));
}

getUserInTempSession() {
	return JSON.parse(sessionStorage.getItem('Token'));
}

//recupère l'objet User quelque soit le type de session
getUserinSession() {
	if (this.getUserInLocalSession())
		{return JSON.parse(localStorage.getItem('Token'));}
	else
		{return JSON.parse(sessionStorage.getItem('Token'));}
}
//fonction prenant un objet user (client/admin ou conseiller) et renvoie une String correspondant au type d'utilisateur
getUserType(user) : string {
	if (user) {
		if (user.numeroclient) {
			return "client";
		}
		if (user.matricule) {
			if (user.fonction) {
				return "admin";
			}
			else {
				return "conseiller";
			}
		}
	}
	else {
		return "guest";
	}
}

//si une session existe retourne true
isConnected() {
	let isCon: boolean = false;
	if (sessionStorage.getItem('Token') || sessionStorage.getItem('Token'))
		{ isCon = true; }
	return isCon;
}

//vide tout les session et renvoie vers la page "d'accueil"
logout() {
	sessionStorage.removeItem('Token');
	localStorage.removeItem('Token');
	//this.router.navigate(['']);
}

redirectionWithUserType(userType: string) {
	switch (userType) {
		case "client":
		this.router.navigate(['client']);
		break;
		
		case "conseiller":
		this.router.navigate(['conseiller']);
		break;

		case "admin":
		this.router.navigate(['admin']);
		break;

		default:
		this.router.navigate(['']);
		break;
	}
}


//partie du service servant à faire fonctionner les bar de nav en fonction des espaces
//on créé d'abord un Subject que l'on pourra envoyer en tant qu'Observable afin de pouvoir faire une sousciption dessus
//la souscription à ce Subject se fait dans AppComponent pour la navbar et dans le SideBarComponent pour la sidebar
private subject = new Subject<string>();

//fonction permettant d'input une string dans le Subject (utilisé dans les component devant provoquer une action sur les bars de nav !!!)
setUserType(usertype: string) {
	this.subject.next(usertype);
}

//vide le Subject
clearUserType() {
	this.subject.next();
}

//récupère la string  "type d'utilisateur" comme observable
getuserTypeasObs(): Observable<string> {
	return this.subject.asObservable();
}

}