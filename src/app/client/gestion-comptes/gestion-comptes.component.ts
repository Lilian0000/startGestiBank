import { Component, OnInit } from '@angular/core';
import {GestionComptesService} from '../../service/gestion-comptes.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-gestion-comptes',
  templateUrl: './gestion-comptes.component.html',
  styleUrls: ['./gestion-comptes.component.css']
})
export class GestionComptesComponent implements OnInit {

  comptes;

  constructor(private router: Router, private gestionComptesService: GestionComptesService) { }

  ngOnInit() {
  	this.comptes = this.gestionComptesService.getComptes();
  }

}
