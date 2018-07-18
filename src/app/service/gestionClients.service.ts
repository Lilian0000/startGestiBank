import { Injectable } from '@angular/core';
import { Clients } from '../modeles/Clients';
import { Client } from '../modeles/Client';
import { Conseiller } from '../modeles/Conseiller';
import { DemandeOuvertureCompte } from '../modeles/DemandeOuvertureCompte';
import { Http, Response } from "@angular/http";
import { map } from "rxjs/operators/map";
import { catchError } from 'rxjs/operators/catchError';
import { Observable } from "rxjs/Observable";

@Injectable() 
export class GestionClientsService {

	private apiUrl = 'http://localhost:9090/GestBankBack/clients';
	constructor(private http: Http) {}

	//récupère tout les clients
	getClients(): Observable<Client[]> {
		return  this.http.get(this.apiUrl).pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error.json().error || "Server error")));	
	}

	getNbOfClients(): Observable<number> {
		return  this.http.get(this.apiUrl + '/getNb').pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error.json().error || "Server error")));
	}
	
	//SPECIFIQUE A ADMIN notification : recupere le nb de client non attribué.
	getNumberOfNotAttClients(): Observable<number> {
		return  this.http.get(this.apiUrl + '/nbnotattributed').pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error.json().error || "Server error")));
	}
	
	//SPECIFIQUE A ADMINcomponent attribué les clients
	getNotAttributedClients(): Observable<Client[]> {
		
		return  this.http.get(this.apiUrl + '/notAttributed').pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error.json().error || "Server error")));
	}

	getClientById(id: number): Observable<Client> {
		return  this.http.get(this.apiUrl + '/' + id).pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error.json().error || "Server error")));
	}

	addClient(client): Observable<Client> {
		return  this.http.post(this.apiUrl, client).pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error.json().error || "Server error")));
	}			

	editClient(client): Observable<Client> {
		return  this.http.put(this.apiUrl + '/' + client.id, client).pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error.json().error || "Server error")));
	}

	deleteClient(id: number): Observable<number> {
		return  this.http.delete(this.apiUrl + '/' + id).pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error.json().error || "Server error")));
	}

	researcheClientByName(research: string): Observable<Client[]> {
		return  this.http.get(this.apiUrl + '/researched/' + research).pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error.json().error || "Server error")));
	}

	demandeOuvertureCompted(dOC): Observable<boolean> {
		return  this.http.post(this.apiUrl + '/DOCpts', dOC).pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error.json().error || "Server error")));
	}

}