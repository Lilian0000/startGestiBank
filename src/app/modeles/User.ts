export abstract class User {

	constructor(
		public id: number,
		public lastName: string,
		public firstName: string,
		public email: string,
		public password: string,
		public address: string,
		public phonenumber: string,
		) {}
}

