import { User } from './User';

export class Client extends User { 

	constructor(
		id: number,
		lastName: string,
		firstName: string,
		email: string,
		password: string,
		address: string,
		phonenumber: string,	
		public numeroclient: number,
		public idConseiller: number)
	
	{
		super(id, lastName, firstName, email, password, address, phonenumber);
	    console.log("lastName ="+lastName+", firstName ="+firstName);
	} 

	
	
	}