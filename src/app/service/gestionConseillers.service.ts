import { Injectable } from '@angular/core';
import { Conseillers } from '../modeles/Conseillers';
import { Conseiller } from '../modeles/Conseiller';

@Injectable() 
export class GestionConseillersService {

	constructor() {}

	//récupère tout les Conseillers
	getConseillers() {return Conseillers;}

	getConseillerById(id: number) {
		return Conseillers[id - 1];
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
}