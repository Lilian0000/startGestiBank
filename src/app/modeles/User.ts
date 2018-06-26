export abstract class User {

	constructor(
		public id: number,
		public firstName: string,
		public lastName: string,
		public email: string,
		public password: string,
		public address: string,
		public phonenumber: string) {}
}

