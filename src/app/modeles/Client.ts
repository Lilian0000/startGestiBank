import { User } from './User';

export class Client extends User { 

	constructor(
		id: number,
		firstName: string,
		lastName: string,
		email: string,
		password: string,
		address: string,
		phonenumber: string,	
		public idClient: number,
		public idConseiller: number)
	
	{super(id, lastName, firstName, email, password, address, phonenumber);} 

	
	
	}