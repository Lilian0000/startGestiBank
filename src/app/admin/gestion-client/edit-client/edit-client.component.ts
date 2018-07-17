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


	constructor(private route: ActivatedRoute, 
		private router: Router, 
		private gestionClientsService: GestionClientsService) { 
	//this.router.routeReuseStrategy.shouldReuseRoute = function(){return false;}  
}

 ngOnInit() {
  	console.log(this.client);
  	// declaration du formulaire
  	this.editClientForm = new FormGroup({
				lastName: new FormControl('', Validators.required),
				firstName: new FormControl('', Validators.required),
				email: new FormControl('', [
					Validators.required,
					Validators.pattern("[^ @]*@[^ @]*")
					]),
				address: new FormControl('', Validators.required),
				phonenumber: new FormControl('', Validators.required),
			});

	this.route.params.subscribe(params => {
		this.id = +params['id'];  
		this.gestionClientsService.getClientById(this.id).subscribe(client => {
			this.client=client;
			this.updateFormulaire();
			console.log(this.client);
		}
		, err => {console.log(err);} );
	});
	
	
  }

  updateFormulaire(){
  	this.editClientForm.patchValue({
  		lastName: this.client.lastName,
  		firstName: this.client.firstName,
  		email: this.client.email,
  		address:this.client.address,
  		phonenumber:this.client.phonenumber
  	})	
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
