import { Component, OnInit} from '@angular/core';
import { AuthentificationService } from './service/authentification.service';
import { EventEmitter, Input, Output} from '@angular/core';
import { FormConnexionComponent } from './form-connexion/form-connexion.component';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {

	userType: any = "guest";
	subscription: Subscription;
	//sub : any;

	constructor(private authentificationService: AuthentificationService) {
		//if (this.authentificationService.getUserinSession()) {
		
		this.subscription = this.authentificationService.getuserTypeasObs().subscribe(userType => { this.userType = userType; });
		//}
		//this.userType = this.authentificationService.getUserType(this.authentificationService.getUserinSession());*/
		//notifySideBar.subscribe(userType => this.userType = this.authentificationService.getUserType(this.authentificationService.getUserinSession()));
	}		

	ngOnInit() {
		if (this.authentificationService.getUserinSession()) {
			this.userType=this.authentificationService.getUserType(this.authentificationService.getUserinSession());
		}
	}
}


