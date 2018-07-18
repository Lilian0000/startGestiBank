import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { catchError } from 'rxjs/operators/catchError';
import { Observable } from "rxjs/Observable";
import { Client } from '../modeles/Client';
import { map } from "rxjs/operators/map";
import {DemandeOuvertureCompte} from '../modeles/DemandeOuvertureCompte';
import { Compte } from '../modeles/Compte';


@Injectable()
export class GestionDemandesService {

 private apiUrl = 'http://localhost:9090/GestBankBack';

 constructor(private http: Http) {}

 getDemandesByConseiller(id: number) : Observable<DemandeOuvertureCompte[]>{ 
 	return this.http.get(this.apiUrl + '/conseillers/' + id + '/demandes').pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error.json().error || "Server error")));
	}

 deleteDemande(id_c: number, id_d:number) : Observable<number>{
 	return this.http.delete(this.apiUrl+'/demandes/'+id_d).pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error.json().error || "Server error")));
 }

 accepterDemande(demande: DemandeOuvertureCompte): Observable<Compte>{
 	return this.http.put(this.apiUrl+'/demandes', demande).pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error.json().error || "Server error")));
 }

}
