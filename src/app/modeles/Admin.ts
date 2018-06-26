import { User } from './User';

export class Admin extends User { 

	constructor(
		id: number,
		lastName: string,
		firstName: string,
		email: string,
		password: string,
		address: string,
		phonenumber: string,		
		public matricule: string,
		public fonction: string,
		public contractStartingDate: Date) 

	{super(id, lastName, firstName, email, password, address, phonenumber);} 

	

	getType() {
		return "Admin";
	}

	}