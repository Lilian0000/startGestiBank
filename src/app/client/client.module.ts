import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';
import { ClientRoutingModule } from './client-routing.module';
import { GestionComptesComponent } from './gestion-comptes/gestion-comptes.component';
import { GestionOperationsComponent } from './gestion-operations/gestion-operations.component';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule
  ],
  declarations: [ClientComponent, GestionComptesComponent, GestionOperationsComponent]
})
export class ClientModule { }
