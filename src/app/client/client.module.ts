import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';
import { ClientRoutingModule } from './client-routing.module';
import { GestionComptesComponent } from './gestion-comptes/gestion-comptes.component';
import { GestionOperationsComponent } from './gestion-operations/gestion-operations.component';
import { DemandeOuvertureCompteComponent } from './demande-ouverture-compte/demande-ouverture-compte.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OperationCompteComponent } from './operation-compte/operation-compte.component';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
	imports: [
	CommonModule,
	ClientRoutingModule,
	FormsModule,
	ReactiveFormsModule,
	OrderModule
	],

	declarations: [ClientComponent, GestionComptesComponent, GestionOperationsComponent,  DemandeOuvertureCompteComponent, OperationCompteComponent]
})

export class ClientModule { }
