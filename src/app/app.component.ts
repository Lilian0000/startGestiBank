import { Component } from '@angular/core';
import { AuthentificationService } from './service/authentification.service';
import { EventEmitter, Input, Output} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthentificationService]
})
export class AppComponent {

	constructor(private authentificationService: AuthentificationService) {}

	Deconexion() {
		this.authentificationService.logout();
		console.log(this.authentificationService.getUserInTempSession());
		console.log(this.authentificationService.getUserInLocalSession());
	}
}


