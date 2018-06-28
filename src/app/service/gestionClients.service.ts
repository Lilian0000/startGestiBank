import { Injectable } from '@angular/core';
import { Clients } from '../modeles/Clients';
import { Client } from '../modeles/Client';
import { Conseiller } from '../modeles/Conseiller';

@Injectable() 
export class GestionClientsService {

	constructor() {}

	//récupère tout les clients
	getClients() {return Clients;}

<<<<<<< HEAD
	getClientsByConseiller(idConseiller: number){
		let clients: Client[] = [];
		for (var i=0; i<Clients.length; i++) {
			if(Clients[i].idConseiller === idConseiller) {
				clients.push(Clients[i]);
			}
		}
		return clients;
	}
	

	//SPECIFIQUE A CLIENT notification cette fonction marche
=======
	
	//SPECIFIQUE A CLIENT notification
>>>>>>> conseiller2
	getNumberOfNotAttClients() {
		var nbClients = 0;
		for (var i=0; i<Clients.length; i++) {
			if(Clients[i].idConseiller === null) {
				nbClients++;
			}
		}
		return nbClients;
	}
	//SPECIFIQUE A CLIENTcomponent attribué les clients
	getNotAttributedClients() {
		var clients: Client[] = [];
		for (var i=0; i<Clients.length; i++) {
			if(Clients[i].idConseiller === null) {
				clients.push(Clients[i]);
			}
		}
		return clients;
	}

	getClientById(id: number) {
		return Clients[id - 1];
	}

	getClientBylastName(lastName: string) {
		for (var i=0; i<Clients.length; i++)
			if(Clients[i].lastName === lastName) 
				{return Clients[i];}
		}

		getClientByIdClient(idClient: number) {
			for (var i=0; i<Clients.length; i++)
				if(Clients[i].idClient === idClient) 
					{return Clients[i];}
			}

			getClientByMail(email: string) {
				for (var i=0; i<Clients.length; i++)
					if(Clients[i].email === email) 
						{return Clients[i];}
				}



				addClient(client) {
					client.id = Clients.length + 1;
					Clients.push(client);
				}

				editClient(client) {
					let oldClient = this.getClientById(client.id);
					client.idClient = oldClient.idClient;
					client.idConseiller = oldClient.idConseiller;
					client.password = oldClient.password;
					let index = (client.id - 1);
					Clients.splice(index, 1, client);
				}

				deleteClient(client) {
					let index = Clients.indexOf(client);
					Clients.splice(index, 1);	
				}

	//generation aleatoire de numéro client avec vérification si le numéroClient éxiste déjà
	idClientGenerator(client) {
		let idClientExist: boolean = true;
		while (idClientExist) {
			let tempIdClient : number = Math.round(Math.random()*(9999-1111));
			if(!this.getClientByIdClient(tempIdClient))
			{
				client.idClient = tempIdClient;
				idClientExist = false;
			}	
		}
	}

}