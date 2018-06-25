import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormInscriptionComponent } from './form-inscription/form-inscription.component';
import { FormConnexionComponent } from './form-connexion/form-connexion.component' 

import { FormControl, FormGroup, Validators } from '@angular/forms';
const routes: Routes = [
{path: 'inscription', component: FormInscriptionComponent},
{path: 'connexion', component: FormConnexionComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}