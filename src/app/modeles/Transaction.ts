import { Depot } from './Depot';
import { Retrait } from './Retrait';

export class Transaction { 

	constructor(
		public rib1: number,
		public rib2: number,
		public depot: Depot,
		public retrait: Retrait
		){} 

	
	
}