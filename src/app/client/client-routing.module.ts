import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { DemandeOuvertureCompteComponent } from './demande-ouverture-compte/demande-ouverture-compte.component';

const routes: Routes = [
{path: 'client', component: ClientComponent},
{path:'DOC', component: DemandeOuvertureCompteComponent}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ClientRoutingModule { }
