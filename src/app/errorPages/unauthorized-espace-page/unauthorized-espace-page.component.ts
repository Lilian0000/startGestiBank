import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unauthorized-espace-page',
  templateUrl: './unauthorized-espace-page.component.html',
  styleUrls: ['./unauthorized-espace-page.component.css']
})
export class UnauthorizedEspacePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectAcceuil() {
  	this.router.navigate(['']);
  }

}
