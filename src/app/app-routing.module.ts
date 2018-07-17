import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormInscriptionComponent } from './form-inscription/form-inscription.component';
import { FormConnexionComponent } from './form-connexion/form-connexion.component' 
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GuestComponent } from './guest/guest.component';
import { ContactBanqueComponent } from './guest/contact-banque/contact-banque.component';
import { UnauthorizedEspacePageComponent } from './errorPages/unauthorized-espace-page/unauthorized-espace-page.component';
import { PageNotFoundComponent } from './errorPages/page-not-found/page-not-found.component';
import { DemandesSuccessComponent } from './successPages/demandes-success/demandes-success.component';
import { GestionConseillerComponent } from './admin/gestion-conseiller/gestion-conseiller.component';
import { MeteoChildComponent } from './guest/meteo-child/meteo-child.component';

const routes: Routes = [
{path: '', component: GuestComponent,
	children: [{path: 'meteoChild/:research', component: MeteoChildComponent}]
},
{path: 'inscription', component: FormInscriptionComponent},
{path: 'connexion', component: FormConnexionComponent},
{path:'contact', component: ContactBanqueComponent},
{path: 'unauthorizedUserSpace', component : UnauthorizedEspacePageComponent},
{path: 'errorPage', component: PageNotFoundComponent },
{path: 'demandeSuccessPage', component: DemandesSuccessComponent}

//{path: '**', redirectTo:''}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}