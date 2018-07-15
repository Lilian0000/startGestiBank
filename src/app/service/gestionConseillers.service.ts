import { Injectable } from '@angular/core';
import { Conseillers } from '../modeles/Conseillers';
import { Conseiller } from '../modeles/Conseiller';
import { Client } from '../modeles/Client';
import { Http, Response } from "@angular/http";
import { map } from "rxjs/operators/map";
import { catchError } from 'rxjs/operators/catchError';
import { Observable } from "rxjs/Observable";

@Injectable() 
export class GestionConseillersService {
	
	private apiUrl = 'http://localhost:9090/GestBankBack/conseillers';
	constructor(private http: Http) {}

	//récupère tout les Conseillers
	getConseillers(): Observable<Conseiller[]> {
		return  this.http.get(this.apiUrl).pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error.json().error || "Server error")));
	}

	getConseillerById(id: number) {
		return Conseillers[id - 1];
	}

	getNbOfConseiller(){
		return this.http.get(this.apiUrl +'/getNb').pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error)));
	}

	getConseillerBylastName(lastName: string) {
		for (var i=0; i<Conseillers.length; i++)
			if(Conseillers[i].lastName === lastName) 
				{return Conseillers[i];}
		}
		
	addConseiller(conseiller) {
		conseiller.id = Conseillers.length + 1;
		Conseillers.push(conseiller);
	}

	deleteConseiller(conseiller) {
		let index;
		index = Conseillers.indexOf(conseiller);
		if (Conseillers.indexOf(conseiller) >= 0) {
		Conseillers.splice(index, 1);
		}
	}
	
	attributeClientToConseiller(idClient, conseiller): Observable<Client> {
		return  this.http.put(this.apiUrl + '/clients/' + idClient, conseiller).pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error.json().error || "Server error")));
	}

	unAttributeClientToConseiller(idCons, client): Observable<boolean> {
		return this.http.put(this.apiUrl + '/clients/desatribue/' + idCons, client).pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error)));
	}
}