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
		return  this.http.get(this.apiUrl + '/' + id).pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error.json().error || "Server error")));
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
		return  this.http.post(this.apiUrl, conseiller).pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error.json().error || "Server error")));
	}

	deleteConseiller(id: number): Observable<number> {
		return  this.http.delete(this.apiUrl + '/' + id).pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error.json().error || "Server error")));
	}
	
	attributeClientToConseiller(idClient, conseiller): Observable<Client> {
		return  this.http.put(this.apiUrl + '/clients/' + idClient, conseiller).pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error.json().error || "Server error")));
	}

	unAttributeClientToConseiller(idCons, client): Observable<boolean> {
		return this.http.put(this.apiUrl + '/clients/desatribue/' + idCons, client).pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error)));
	}

	editConseiller(conseiller): Observable<Conseiller> {
		//console.log(client);
		return  this.http.put(this.apiUrl + '/' + conseiller.id, conseiller).pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error.json().error || "Server error")));
    }
}