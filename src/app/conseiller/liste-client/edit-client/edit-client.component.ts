import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import  {GestionClientsService} from '../../../service/gestionClients.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Client} from '../../../modeles/Client';
import {timeout} from 'rxjs/operators/timeout';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

	id: number;
	client: Client;
	editClientForm: FormGroup;


  constructor(private route: ActivatedRoute, private router: Router, 
		private gestionClientsService: GestionClientsService) { }

  ngOnInit() {
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
		let modifiedConseiller: Client = new Client
		(this.id,
			this.editClientForm.controls['lastName'].value,
			this.editClientForm.controls['firstName'].value,
			this.editClientForm.controls['email'].value,
			null,
			this.editClientForm.controls['address'].value,
			this.editClientForm.controls['phonenumber'].value,
			null,
			null);
		this.gestionClientsService.editClient(modifiedConseiller).subscribe(bool => {
			this.router.navigate(['/conseiller/gestion_clients']);
			this.editClientForm.reset();});
			}

		}
  redirectUserPage() {
	this.router.navigate(['/conseiller/gestion_clients']);
}
}


