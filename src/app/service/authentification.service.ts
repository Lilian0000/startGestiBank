import { Injectable } from '@angular/core';
import { Clients } from '../modeles/Clients';
import { Client } from '../modeles/Client';
import { Conseillers } from '../modeles/Conseillers';
import { Conseiller } from '../modeles/Conseiller';
import { Admin } from '../modeles/Admin';
import { Admins } from '../modeles/Admins';

import { Routes, RouterModule, Router} from '@angular/router';
@Injectable()
export class AuthentificationService {
	
	constructor(private router: Router) {}


getUserAtConnexion(email: string, password: string) {

	let User;

	for (var i=0; i<Clients.length; i++) {
		if (email === Clients[i].email) 
		{
			if (password === Clients[i].password)
				{User = Clients[i];}
		}
	}
	for (var i=0; i<Conseillers.length; i++) {
		if (email === Conseillers[i].email) 
		{
			if (password === Conseillers[i].password)
				{User = Conseillers[i];}
		}
	}
	for (var i=0; i<Admins.length; i++) {
		if (email === Admins[i].email) 
		{
			if (password === Admins[i].password)
				{User = Admins[i];}
		}
	}

	return User;
}

connexionRedirection(user) {
	if (user.idClient) {
		this.router.navigate(['/client']);
	}
	if (user.matricule) {
		if (user.fonction) {
			this.router.navigate(['/admin']);
		}
	else {this.router.navigate(['/conseiller']);}
	}
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
getUserType(user) {
	if (user.idClient) {
		return "Client";
	}
	if (user.matricule) {
		if (user.fonction) {
			return "Admin";
		}
	else {return "Conseiller";}
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
	this.router.navigate(['']);
}
}