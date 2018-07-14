import { Component, OnInit } from '@angular/core';
import {GestionComptesService} from '../../service/gestion-comptes.service'



@Component({
  selector: 'app-gestion-comptes',
  templateUrl: './gestion-comptes.component.html',
  styleUrls: ['./gestion-comptes.component.css']
})
export class GestionComptesComponent implements OnInit {

  comptes;

  constructor(private gestionComptesService: GestionComptesService) { }

  ngOnInit() {
  	this.comptes = this.gestionComptesService.getComptes();
  }

}
