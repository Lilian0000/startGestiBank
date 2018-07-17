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
		//return Clients;
		return  this.http.get(this.apiUrl).pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error.json().error || "Server error")));	
	}

	getNbOfClients(): Observable<number> {
		return  this.http.get(this.apiUrl + '/getNb').pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error.json().error || "Server error")));
	}
	getClientsByConseiller(idConseiller: number){
		let clients: Client[] = [];
		for (var i=0; i<Clients.length; i++) {
			if(Clients[i].idConseiller === idConseiller) {
				clients.push(Clients[i]);
			}
		}
		return clients;
	}
	
	//SPECIFIQUE A ADMIN notification : recupere le nb de client non attribué.
	getNumberOfNotAttClients(): Observable<number> {
		/*var nbClients = 0;
		for (var i=0; i<Clients.length; i++) {
			if(Clients[i].idConseiller === null) {
				nbClients++;
			}
		}
		return nbClients;*/
		return  this.http.get(this.apiUrl + '/nbnotattributed').pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error.json().error || "Server error")));

	}
	
	//SPECIFIQUE A ADMINcomponent attribué les clients
	getNotAttributedClients(): Observable<Client[]> {
		/*var clients: Client[] = [];
		for (var i=0; i<Clients.length; i++) {
			if(Clients[i].idConseiller === null) {
				clients.push(Clients[i]);
			}
		}
		return clients;*/
		return  this.http.get(this.apiUrl + '/notAttributed').pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error.json().error || "Server error")));
	}

	getClientById(id: number): Observable<Client> {
		return  this.http.get(this.apiUrl + '/' + id).pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error.json().error || "Server error")));
	}

	getClientBylastName(lastName: string) {
		for (var i=0; i<Clients.length; i++)
			if(Clients[i].lastName === lastName) 
				{return Clients[i];}
		}

	getClientByIdClient(idClient: number) {
		for (var i=0; i<Clients.length; i++)
			if(Clients[i].numeroclient === idClient) 
				{return Clients[i];}
		}

	getClientByMail(email: string) {
		for (var i=0; i<Clients.length; i++)
			if(Clients[i].email === email) 
				{return Clients[i];}
		}



	addClient(client): Observable<Client> {
		return  this.http.post(this.apiUrl, client).pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error.json().error || "Server error")));
	}			

	editClient(client): Observable<Client> {
		//console.log(client);
		return  this.http.put(this.apiUrl + '/' + client.id, client).pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error.json().error || "Server error")));
		/*let oldClient = this.getClientById(client.id);
		client.idClient = oldClient.numeroclient;
		client.idConseiller = oldClient.idConseiller;
		client.password = oldClient.password;
		let index = (client.id - 1);
		Clients.splice(index, 1, client);*/
	}

	deleteClient(id: number): Observable<number> {
		return  this.http.delete(this.apiUrl + '/' + id).pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error.json().error || "Server error")));
	}

	demandeOuvertureCompted(dOC): Observable<boolean> {
		return  this.http.post(this.apiUrl + '/DOCpts', dOC).pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error.json().error || "Server error")));
	}

}