import { Injectable } from '@angular/core';
import { Clients } from '../modeles/Clients';
import { Client } from '../modeles/Client';
import { Conseiller } from '../modeles/Conseiller';
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

	getClientsByConseiller(idConseiller: number){
		let clients: Client[] = [];
		for (var i=0; i<Clients.length; i++) {
			if(Clients[i].idConseiller === idConseiller) {
				clients.push(Clients[i]);
			}
		}
		return clients;
	}
	
	//SPECIFIQUE A CLIENT notification
	getNumberOfNotAttClients() {
		var nbClients = 0;
		for (var i=0; i<Clients.length; i++) {
			if(Clients[i].idConseiller === null) {
				nbClients++;
			}
		}
		return nbClients;
	}
	
	//SPECIFIQUE A CLIENTcomponent attribué les clients
	getNotAttributedClients() {
		var clients: Client[] = [];
		for (var i=0; i<Clients.length; i++) {
			if(Clients[i].idConseiller === null) {
				clients.push(Clients[i]);
			}
		}
		return clients;
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

	attributeClientToConseiller(client, idConseiller) {
			client.idConseiller = idConseiller;
	}

	//generation aleatoire de numéro client avec vérification si le numéroClient éxiste déjà
	idClientGenerator(client) {
		let idClientExist: boolean = true;
		while (idClientExist) {
			let tempIdClient : number = Math.round(Math.random()*(9999-1111));
			if(!this.getClientByIdClient(tempIdClient))
			{
				client.numeroclient = tempIdClient;
				idClientExist = false;
			}	
		}
	}

}