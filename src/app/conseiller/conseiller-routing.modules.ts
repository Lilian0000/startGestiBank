import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConseillerComponent } from './conseiller/conseiller.component';
import {ListeClientComponent} from './liste-client/liste-client.component';
import {EditClientComponent} from './liste-client/edit-client/edit-client.component';
import {GestionDemandesComponent} from './gestion-demandes/gestion-demandes.component';


const routes: Routes = [
{path: 'conseiller', component: ConseillerComponent},
{path: 'conseiller/gestion_clients', component: ListeClientComponent},
{path: 'conseiller/edit_client/:id', component: EditClientComponent},
{path: 'conseiller/gestion_demandes', component: GestionDemandesComponent}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ConseillerRoutingModule { }


