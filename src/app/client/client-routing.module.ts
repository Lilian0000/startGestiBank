import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { GestionOperationsComponent } from './gestion-operations/gestion-operations.component'

const routes: Routes = [
{path: 'client', component: ClientComponent},
{path: 'client/operations/:rib', component: GestionOperationsComponent}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ClientRoutingModule { }
