import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.modules'
import { AdminComponent } from './admin/admin.component';
import { GestionClientComponent } from './gestion-client/gestion-client.component';
import { AddClientComponent } from './gestion-client/add-client/add-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditClientComponent } from './gestion-client/edit-client/edit-client.component';
import { NotificationsComponent } from './admin/notifications/notifications.component';
import { AttributeClientsComponent } from './attribute-clients/attribute-clients.component';
import { AttributeClientToConseillerComponent } from './attribute-clients/attribute-client-to-conseiller/attribute-client-to-conseiller.component';
import { GestionConseillerComponent } from './gestion-conseiller/gestion-conseiller.component';
import { AddConseillerComponent } from './gestion-conseiller/add-conseiller/add-conseiller.component';
import { EditConseillerComponent } from './gestion-conseiller/edit-conseiller/edit-conseiller.component';



@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AdminComponent, GestionClientComponent, AddClientComponent, EditClientComponent, NotificationsComponent, AttributeClientsComponent, AttributeClientToConseillerComponent, GestionConseillerComponent, AddConseillerComponent, EditConseillerComponent]
  
})
export class AdminModule { }
