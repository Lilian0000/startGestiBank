import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthentificationService } from './authentification.service';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class RoleGardService implements CanActivate {

		expectedRole: string;
		role: string;
		constructor(public authentificationService: AuthentificationService, public router: Router)	{}

		canActivate(route: ActivatedRouteSnapshot): boolean {
			this.expectedRole = route.data.expectedRole;
			this.role = this.authentificationService.getUserType(this.authentificationService.getUserinSession());
				
			if (this.role !== this.expectedRole) {
				this.router.navigate(['unauthorizedUserSpace']);
				return false;
			}
			return true;
	}
}
