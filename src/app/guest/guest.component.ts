import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../service/authentification.service';



@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {

  userType:string;

  constructor(private authentificationService: AuthentificationService) { }

 

  ngOnInit() {
    
  	this.userType = this.authentificationService.getUserType(this.authentificationService.getUserinSession());
  	if (this.userType !== "guest")
  	{
  		this.authentificationService.redirectionWithUserType(this.userType);
     
  	}
  }

}
