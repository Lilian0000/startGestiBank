import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConseillerRoutingModule } from './conseiller-routing.modules';
import { ConseillerComponent } from './conseiller/conseiller.component';
import { ListeClientComponent } from './liste-client/liste-client.component';

@NgModule({
  imports: [
    CommonModule,
    ConseillerRoutingModule
  ],
  declarations: [ConseillerComponent, ListeClientComponent]
})
export class ConseillerModule { }
