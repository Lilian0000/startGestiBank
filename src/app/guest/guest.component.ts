import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../service/authentification.service';
@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {

  constructor(private authentificationService: AuthentificationService) { }

  ngOnInit() {
  	this.authentificationService.clearUserType();
	this.authentificationService.setUserType('guest');
  }

}
