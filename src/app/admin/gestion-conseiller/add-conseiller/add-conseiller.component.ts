import { Component, OnInit } from '@angular/core';
import  {GestionConseillersService} from '../../../service/gestionConseillers.service';
import {Router} from '@angular/router';
import {Conseiller} from '../../../modeles/Conseiller';
import { FormControl, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-add-conseiller',
  templateUrl: './add-conseiller.component.html',
  styleUrls: ['./add-conseiller.component.css']
})
export class AddConseillerComponent implements OnInit {

	id: number;
	conseiller: Conseiller;
	conseillerForm: FormGroup;

  constructor(private router: Router, 
		private gestionConseillers: GestionConseillersService) { }

  ngOnInit() {
  			this.conseillerForm = new FormGroup({
			lastName: new FormControl('', Validators.required),
			firstName: new FormControl('', Validators.required),
			
			email: new FormControl('', [
				Validators.required,
				Validators.pattern("[^ @]*@[^ @]*")
				]),
			password: new FormControl('', Validators.required),
			address: new FormControl('', Validators.required),
			phonenumber: new FormControl('', Validators.required),
			contractStartingDate: new FormControl('', Validators.required)
		});
  }

  	onSubmit() {
		if(this.conseillerForm.valid) {
			let conseiller: Conseiller = new Conseiller(this.id,
				this.conseillerForm.controls['lastName'].value,
				this.conseillerForm.controls['firstName'].value,
				this.conseillerForm.controls['email'].value,
				this.conseillerForm.controls['password'].value,
				this.conseillerForm.controls['address'].value,
				this.conseillerForm.controls['phonenumber'].value,
				null,
				this.conseillerForm.controls['contractStartingDate'].value);
			this.gestionConseillers.addConseiller(conseiller).subscribe(conseiller => {
				this.conseillerForm.reset();
				this.router.navigate(['/admin/gestion_conseiller']);
			});
			console.log(conseiller);
		}

	}

	redirectUserPage() {
	this.router.navigate(['/admin/gestion_conseiller']);
}

}
