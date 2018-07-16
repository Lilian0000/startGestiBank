import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionClientsService } from "../../../service/gestionClients.service";
import { Observable } from 'rxjs/';
import { Client } from '../../../modeles/Client';

@Component({
	selector: 'app-edit-client',
	templateUrl: './edit-client.component.html',
	styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

	id: number;
	client;
	editClientForm: FormGroup;
	private sub: any;

	constructor(private route: ActivatedRoute, 
		private router: Router, 
		private gestionClientsService: GestionClientsService) { 
	//this.router.routeReuseStrategy.shouldReuseRoute = function(){return false;}  
}

ngOnInit() {

			
	this.sub = this.route.params.subscribe(params => {
		this.id = +params['id'];  
		
		this.gestionClientsService.getClientById(this.id).subscribe(client => {
			this.client=client;
			console.log(client);
		}
		, err => {console.log(err);} );
	});
	
			this.editClientForm = new FormGroup({
				lastName: new FormControl(this.client.lastName, Validators.required),
				firstName: new FormControl(this.client.firstName, Validators.required),
				email: new FormControl(this.client.email, [
					Validators.required,
					Validators.pattern("[^ @]*@[^ @]*")
					]),
				address: new FormControl(this.client.address, Validators.required),
				phonenumber: new FormControl(this.client.phonenumber, Validators.required),
			});
}

onSubmit() {
	if(this.editClientForm.valid) {
		console.log (">>> lastname on subit = "+this.editClientForm.controls['lastName'].value);
		let modifiedClient: Client = new Client
		(this.id,
			this.editClientForm.controls['lastName'].value,
			this.editClientForm.controls['firstName'].value,
			this.editClientForm.controls['email'].value,
			null,
			this.editClientForm.controls['address'].value,
			this.editClientForm.controls['phonenumber'].value,
			null,
			0);
		this.gestionClientsService.editClient(modifiedClient).subscribe(bool => {
			this.router.navigate(['/admin/gestion_client']);
			this.editClientForm.reset();});
		
		
	}
}

redirectUserPage() {
	this.router.navigate(['/admin/gestion_client']);
}

}
