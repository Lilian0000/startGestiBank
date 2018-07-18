import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {GestionConseillersService} from '../../service/gestionConseillers.service';


@Component({
  selector: 'app-gestion-conseiller',
  templateUrl: './gestion-conseiller.component.html',
  styleUrls: ['./gestion-conseiller.component.css']

})
export class GestionConseillerComponent implements OnInit {

  conseillers;

  constructor(private router: Router, private gestionConseillersService: GestionConseillersService) { }

  ngOnInit() {
  	this.getConseillers();
  }

  getConseillers() {
  this.gestionConseillersService.getConseillers().subscribe(conseillers => {this.conseillers=conseillers;
  console.log(this.conseillers);
  }, err => {console.log(err);} 
  );
  }

  redirectNewConseillerPage() {
  this.router.navigate(['admin/add_conseiller']);
  }

  editConseillerPage(conseiller) {
    if (conseiller) {
      this.router.navigate(['admin/edit_conseiller', conseiller.id]);
    }
  }
  onDelete(conseiller) {
      this.gestionConseillersService.deleteConseiller(conseiller.id).subscribe(
        res => {
          this.getConseillers();
          this.router.navigate(['admin/gestion_conseiller']);
        });
  }

  

}
