import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import  {GestionConseillersService} from '../../../service/gestionConseillers.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Conseiller} from '../../../modeles/Conseiller';
import {timeout} from 'rxjs/operators/timeout';

@Component({
  selector: 'app-edit-conseiller',
  templateUrl: './edit-conseiller.component.html',
  styleUrls: ['./edit-conseiller.component.css']
})
export class EditConseillerComponent implements OnInit {

	id: number;
	conseiller: Conseiller;
	editConseillerForm: FormGroup;
	private sub: any;

  constructor(private route: ActivatedRoute, private router: Router, 
		private gestionConseillersService: GestionConseillersService) { }

  ngOnInit() {
  	console.log(this.conseiller);
  	// declaration du formulaire
  	this.editConseillerForm = new FormGroup({
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
		this.gestionConseillersService.getConseillerById(this.id).subscribe(conseiller => {
			this.conseiller=conseiller;
			this.updateFormulaire();
			console.log(this.conseiller);
		}
		, err => {console.log(err);} );
	});
	
	
  }

  updateFormulaire(){
  	this.editConseillerForm.patchValue({
  		lastName: this.conseiller.lastName,
  		firstName: this.conseiller.firstName,
  		email: this.conseiller.email,
  		address:this.conseiller.address,
  		phonenumber:this.conseiller.phonenumber
  	})	
 }

  onSubmit() {
	if(this.editConseillerForm.valid) {
		console.log (">>> lastname on subit = "+this.editConseillerForm.controls['lastName'].value);
		let modifiedConseiller: Conseiller = new Conseiller
		(this.id,
			this.editConseillerForm.controls['lastName'].value,
			this.editConseillerForm.controls['firstName'].value,
			this.editConseillerForm.controls['email'].value,
			null,
			this.editConseillerForm.controls['address'].value,
			this.editConseillerForm.controls['phonenumber'].value,
			null,
			null);
		this.gestionConseillersService.editConseiller(modifiedConseiller).subscribe(bool => {
			this.router.navigate(['/admin/gestion_conseiller']);
			this.editConseillerForm.reset();});
		
		
	}
}

  redirectUserPage() {
	this.router.navigate(['/admin/gestion_conseiller']);
}

}
