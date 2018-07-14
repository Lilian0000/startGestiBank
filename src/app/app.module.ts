import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';
import { ConseillerModule } from './conseiller/conseiller.module';
import { FormInscriptionComponent } from './form-inscription/form-inscription.component';
import { FormConnexionComponent } from './form-connexion/form-connexion.component';
import { AuthentificationService } from './service/authentification.service';
import { GestionClientsService} from './service/gestionClients.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarModule } from './sidebar/sidebar.module';
import { NavbarModule } from './navbar/navbar.module';
import { GuestComponent } from './guest/guest.component';
import { GestionComptesService } from './service/gestion-comptes.service'
import { RoleGardService } from './service/role-gard.service';
import { UnauthorizedEspacePageComponent } from './errorPages/unauthorized-espace-page/unauthorized-espace-page.component';
import { PageNotFoundComponent } from './errorPages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FormInscriptionComponent,
    FormConnexionComponent,
    GuestComponent,
    UnauthorizedEspacePageComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    AdminModule,
    ClientModule,
    ConseillerModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarModule,
    NavbarModule
  ],
  providers: [AuthentificationService, GestionClientsService, GestionComptesService, RoleGardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

