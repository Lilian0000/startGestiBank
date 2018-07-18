import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConseillerRoutingModule } from './conseiller-routing.modules';
import { ConseillerComponent } from './conseiller/conseiller.component';
import { ListeClientComponent } from './liste-client/liste-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationsComponent } from './conseiller/notifications/notifications.component';

@NgModule({
	imports: [
	CommonModule,
	ConseillerRoutingModule, 
	],
	declarations: [ConseillerComponent, ListeClientComponent, NotificationsComponent]
})
export class ConseillerModule { }
