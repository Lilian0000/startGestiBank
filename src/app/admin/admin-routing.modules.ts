import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { GestionClientComponent } from './gestion-client/gestion-client.component';
import { AddClientComponent } from './gestion-client/add-client/add-client.component';
import { EditClientComponent } from './gestion-client/edit-client/edit-client.component';
import { NotificationsComponent} from './admin/notifications/notifications.component';
import { AttributeClientsComponent } from './attribute-clients/attribute-clients.component';
const adminRoutes: Routes = [
	{path: 'admin', component: AdminComponent,},
	{path: 'admin/attribute_client', component: AttributeClientsComponent,},
	{path :'admin/gestion_client', component: GestionClientComponent,
		children: [
			{
				path: 'add_client', component: AddClientComponent,
			},
			{
				path: 'edit_client/:id', component: EditClientComponent,
			}	
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(adminRoutes)],
	exports: [RouterModule]
})
export class AdminRoutingModule { }
