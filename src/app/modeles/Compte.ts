export class Compte { 

	constructor(
		public rib: number,
		public dateCreation: Date,
		public solde: number,
		public description: string
		) 
	{
		this.rib=rib; 
		this.dateCreation=dateCreation; 
		this.solde=solde; 
		this.description=description; 
	}
	
}








