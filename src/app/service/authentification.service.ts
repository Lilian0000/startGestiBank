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


inputUserInLocalSession(user) {
	localStorage.setItem('Token', JSON.stringify(user));				
}

inputUserInTempSession(user) {
	sessionStorage.setItem('Token', JSON.stringify(user));
}

getUserInLocalSession() {
	return JSON.parse(localStorage.getItem('Token'));
}

getUserInTempSession() {
	return JSON.parse(sessionStorage.getItem('Token'));
}

isConnected() {
	let isCon: boolean = false;
	if (sessionStorage.getItem('Token') || sessionStorage.getItem('Token'))
		{ isCon = true; }
	return isCon;
}

logout() {
	sessionStorage.removeItem('Token');
	localStorage.removeItem('Token');
	this.router.navigate(['']);
}
}