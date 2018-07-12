import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthentificationService } from './authentification.service';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class RoleGardService implements CanActivate {

		subscription: Subscription;
		userType: String;
		expectedRole;
		role;
		constructor(public authentificationService: AuthentificationService, public router: Router)	{}

		canActivate(route: ActivatedRouteSnapshot): boolean {
			this.subscription = this.authentificationService.getuserTypeasObs().subscribe(userType => { this.userType = userType; 
			this.expectedRole = route.data.expectedRole;
				console.log(this.expectedRole);
			this.role = this.userType;
				console.log(this.role);
				});
			if (this.role !== this.expectedRole) {
				this.router.navigate(['']);
				return false;
			}
			return true;
		

	}
}
