import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { GestionClientComponent } from './gestion-client/gestion-client.component';
import { AddClientComponent } from './gestion-client/add-client/add-client.component';
import { EditClientComponent } from './gestion-client/edit-client/edit-client.component';
import { NotificationsComponent} from './admin/notifications/notifications.component';
import { AttributeClientsComponent } from './attribute-clients/attribute-clients.component';
import { AttributeClientToConseillerComponent } from './attribute-clients/attribute-client-to-conseiller/attribute-client-to-conseiller.component';
import { RoleGardService as RoleGard} from '../service/role-gard.service';

const adminRoutes: Routes = [
	{path: 'admin', component: AdminComponent, canActivate: [RoleGard], data: {expectedRole: 'admin'}},

	{path: 'admin/attribute_clients', component: AttributeClientsComponent, canActivate: [RoleGard], data: {expectedRole: 'admin'}},
	{path: 'admin/attribute_clients/attribute_client_to_conseiller/:id', component: AttributeClientToConseillerComponent, canActivate: [RoleGard], data: {expectedRole: 'admin'}},
	
	{path :'admin/add_client', component: AddClientComponent, canActivate: [RoleGard], data: {expectedRole: 'admin'}},
	{path :'admin/edit_client/:id', component: EditClientComponent, canActivate: [RoleGard], data: {expectedRole: 'admin'}},
	{path :'admin/gestion_client', component: GestionClientComponent, canActivate: [RoleGard], data: {expectedRole: 'admin'}}
		/*children: [
			{
				path: 'add_client', component: AddClientComponent,
			},
			{
				path: 'edit_client/:id', component: EditClientComponent,
			}	
		]
	}*/
];

@NgModule({
	imports: [RouterModule.forChild(adminRoutes)],
	exports: [RouterModule]
})
export class AdminRoutingModule { }
