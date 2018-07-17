import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { GestionOperationsComponent } from './gestion-operations/gestion-operations.component'
import { DemandeOuvertureCompteComponent } from './demande-ouverture-compte/demande-ouverture-compte.component';
import { OperationCompteComponent } from './operation-compte/operation-compte.component'

const routes: Routes = [
{path: 'client', component: ClientComponent},
{path:'DOC', component: DemandeOuvertureCompteComponent},
{path: 'client/operations/:rib', component: GestionOperationsComponent,
 children: [{path: 'op', component: OperationCompteComponent}]}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ClientRoutingModule { }
