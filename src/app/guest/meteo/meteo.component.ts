import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {
  
  researchFormValue:string;
  researcheWeatherForm: FormGroup;
  constructor(private router: Router) { }
  boolShouldIClose: boolean = false;
  ngOnInit() {

  	this.researcheWeatherForm = new FormGroup({
      researchWeaterInput: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[A-Za-z]{3,}')
        ]))
    });

  }

  onSubmit() {
    this.boolShouldIClose = true;
    this.router.navigate(['meteoChild', this.researcheWeatherForm.controls['researchWeaterInput'].value]);
  }

  redirectGuestPage() {
    this.boolShouldIClose = false;
    this.router.navigate(['']);
  }

  allValid() {
    if (!this.researcheWeatherForm.valid || this.boolShouldIClose == true) {
      return false;
    }
    else {
      return true;
    }
  }
}