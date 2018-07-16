import { Injectable } from '@angular/core';
import { Compte } from '../modeles/Compte';
import { Clients } from '../modeles/Clients';
import { Client } from '../modeles/Client';
import { Depot } from '../modeles/Depot';
import { Retrait } from '../modeles/Retrait';
import { Conseiller } from '../modeles/Conseiller';
import { Http, Response } from "@angular/http";
import { map } from "rxjs/operators/map";
import { catchError } from 'rxjs/operators/catchError';
import { Observable } from "rxjs/Observable";
import { Operation } from '../modeles/Operation'
import { Routes, RouterModule, Router} from '@angular/router';

@Injectable()
export class GestionComptesService {

	private apiUrl = 'http://localhost:9090/GestBankBack/';
	constructor(private router: Router, private http: Http) {}

	inputCompteInSession(compte) {
		sessionStorage.setItem('Token', JSON.stringify(compte));				
	}

	getCompteinSession() {
		return JSON.parse(sessionStorage.getItem('Token'));
	}

	closeCompteSession() {
		sessionStorage.removeItem('Token');
		localStorage.removeItem('Token');
		this.router.navigate(['client']);
	}

	getComptes(): Observable<Compte[]> {
		return  this.http.get(this.apiUrl+'comptes').pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error.json().error || "Server error")));
	}

	getComptesByClient(id: number): Observable<Compte[]> {
		return  this.http.get(this.apiUrl + 'clients/' + id + '/comptes').pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error.json().error || "Server error")));
	}

	addCompte(id: number): Observable<Client>{	
		let compte: Compte = new Compte(null, new Date(), 0, "Création de compte");
		console.log(compte);		
		return  this.http.put(this.apiUrl + 'clients/' + id + '/comptes', compte).pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error.json().error || "Server error")));
	}

	editCompte(client): Observable<Client> {
		console.log(client);
		return  this.http.put(this.apiUrl + '/' + client.id, client).pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error.json().error || "Server error")));
	}

	deleteCompte(id: number): Observable<number> {
		return  this.http.delete(this.apiUrl + '/' + id).pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error.json().error || "Server error")));
	}

	getOperations(): Observable<Operation[]>{
		return  this.http.get(this.apiUrl+'comptes').pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error.json().error || "Server error")));
	}

	getOperationsByCompte(rib: number): Observable<Operation[]> {
		return  this.http.get(this.apiUrl + 'comptes/' + rib + '/operations').pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error.json().error || "Server error")));
	}

	addOperation(rib: number, somme: number, typeOperation: string): Observable<Operation>{	
		let depot: Depot = new Depot(null, somme, new Date());
		let retrait: Retrait = new Retrait(null, somme, new Date());
		console.log(typeOperation);
		if (typeOperation == "depot"){
			console.log("ceci est un depot la con de toi");
			return this.http.put(this.apiUrl + 'comptes/' + rib + '/operations', depot).pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error.json().error || "Server error")));
		}
		if (typeOperation == "retrait"){
			console.log("ceci est un retrait la con de toi");
			return this.http.put(this.apiUrl + 'comptes/' + rib + '/operations', retrait).pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error.json().error || "Server error")));
		}
		else {
			console.log("Ni un retrait ni un depot, WTF!!!");
		}
	}
}
