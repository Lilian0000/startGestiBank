import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConseillerRoutingModule } from './conseiller-routing.modules';
import { ConseillerComponent } from './conseiller/conseiller.component';
import { ListeClientComponent } from './liste-client/liste-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationsComponent } from './conseiller/notifications/notifications.component';
import { EditClientComponent } from './liste-client/edit-client/edit-client.component';
import { GestionDemandesComponent } from './gestion-demandes/gestion-demandes.component';

@NgModule({
  imports: [
    CommonModule,
    ConseillerRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ConseillerComponent, ListeClientComponent, NotificationsComponent, EditClientComponent, GestionDemandesComponent]
})
export class ConseillerModule { }
