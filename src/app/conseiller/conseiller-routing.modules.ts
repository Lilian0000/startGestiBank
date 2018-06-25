import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConseillerComponent } from './conseiller/conseiller.component';

const routes: Routes = [
{path: 'conseiller', component: ConseillerComponent}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ConseillerRoutingModule { }
