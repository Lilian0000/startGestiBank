import { Component, OnInit} from '@angular/core';
import { AuthentificationService } from './service/authentification.service';
import { EventEmitter, Input, Output} from '@angular/core';
import { FormConnexionComponent } from './form-connexion/form-connexion.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
	
	constructor() {
	}	
}


