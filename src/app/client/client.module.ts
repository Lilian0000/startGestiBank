import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';
import { ClientRoutingModule } from './client-routing.module';
import { GestionComptesComponent } from './gestion-comptes/gestion-comptes.component';
import { DemandeOuvertureCompteComponent } from './demande-ouverture-compte/demande-ouverture-compte.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ClientComponent, GestionComptesComponent, DemandeOuvertureCompteComponent]
})
export class ClientModule { }
