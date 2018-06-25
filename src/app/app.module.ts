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
import { GestionClientsService } from './service/gestionClients.service';

@NgModule({
  declarations: [
    AppComponent,
    FormInscriptionComponent,
    FormConnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    AdminModule,
    ClientModule,
    ConseillerModule
  ],
  providers: [GestionClientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

