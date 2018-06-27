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
	client: Client;
	clientForm: FormGroup;
	private sub: any;

	constructor(private route: ActivatedRoute, 
		private router: Router, 
		private gestionClientsService: GestionClientsService) { }

	ngOnInit() {

	this.sub = this.route.params.subscribe(params => {
    this.id = +params['id']; 

    this.client=this.gestionClientsService.getClientById(this.id);});

	

	this.clientForm = new FormGroup({
			firstName: new FormControl('', Validators.required),
			lastName: new FormControl('', Validators.required),
			email: new FormControl('', [
				Validators.required,
				Validators.pattern("[^ @]*@[^ @]*")
				]),
			
			address: new FormControl('', Validators.required),
			phonenumber: new FormControl('', Validators.required),
		});	
	}

	onSubmit() {
		if(this.clientForm.valid) {
			let client: Client = new Client
				(this.id,
				this.clientForm.controls['firstName'].value,
				this.clientForm.controls['lastName'].value,
				this.clientForm.controls['email'].value,
				null,
				this.clientForm.controls['address'].value,
				this.clientForm.controls['phonenumber'].value,
				null,
				null);
			this.gestionClientsService.editClient(client);
			this.clientForm.reset();
			this.router.navigate(['/admin/gestion_client']);
		}
	}

	redirectUserPage() {
		this.router.navigate(['/admin/gestion_client']);
	}

}
