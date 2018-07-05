import { Injectable } from '@angular/core';
import { Comptes } from '../modeles/Comptes';

@Injectable()
export class GestionComptesService {

  constructor() { }

  getComptes(){
  	return Comptes;
  }
}
