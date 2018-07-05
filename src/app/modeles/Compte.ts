export class Compte { 

	constructor(
		public IBAN: string,
		public dateDeCreation: Date,
		public Solde: number,
		public Decouvert: number
		) 
	{
		this.IBAN=IBAN; 
		this.dateDeCreation=dateDeCreation; 
		this.Solde=Solde; 
		this.Decouvert=Decouvert; 
	}
	
}








