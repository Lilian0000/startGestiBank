import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConseillerRoutingModule } from './conseiller-routing.modules';
import { ConseillerComponent } from './conseiller/conseiller.component';

@NgModule({
  imports: [
    CommonModule,
    ConseillerRoutingModule
  ],
  declarations: [ConseillerComponent]
})
export class ConseillerModule { }
