import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormInscriptionComponent } from './form-inscription/form-inscription.component';
import { FormConnexionComponent } from './form-connexion/form-connexion.component' 
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GuestComponent } from './guest/guest.component';
const routes: Routes = [
{path: '', component: GuestComponent},
{path: 'inscription', component: FormInscriptionComponent},
{path: 'connexion', component: FormConnexionComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}