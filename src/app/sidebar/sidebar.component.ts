import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { AuthentificationService } from '../service/authentification.service';
import { Router } from '@angular/router';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    //On ajoute un attribut userSpace dans l'interface pour pouvoir filter le tableau ROUTES par type d'utilisateur
    userSpace: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '', title: 'Accueil',  icon: '', class: '', userSpace: 'guest'  },
    { path: 'simulateurCredit', title: 'Simulateur de crédit',  icon: '', class: '', userSpace: 'guest'  },
    { path: 'convertisseurDevise', title: 'Convertisseur de devise',  icon: '', class: '', userSpace: 'guest'  },
    { path: 'contact', title: 'Contacter la banque',  icon: '', class: '', userSpace: 'guest'  },
    { path: 'admin', title: 'Dashboard',  icon: '', class: '', userSpace: 'admin'  },
    { path: 'admin/attribute_clients', title: "Demandes d'affectation",  icon: '', class: '', userSpace: 'admin'  },
    { path: 'admin/gestion_conseiller', title: 'Gestion conseillers',  icon: '', class: '', userSpace: 'admin'  },
    { path: 'admin/gestion_client', title: 'Gestions clients',  icon: '', class: '', userSpace: 'admin'  },
    { path: 'client/', title: 'Consulter',  icon: '', class: '', userSpace: 'client'  },
    { path: 'client/operations/:rib/op', title: 'Gérer',  icon: '', class: '', userSpace: 'client'  },
    { path: 'DOC', title: 'Demande ouverture de compte',  icon: '', class: '', userSpace: 'client'  },
    { path: 'contact', title: 'Contacter la banque',  icon: '', class: '', userSpace: 'client'  },
    { path: 'conseiller', title: 'Dashboard', icon :'', class:'', userSpace:'conseiller'},
    { path: 'conseiller/gestion_demandes', title: 'Gerer les demandes', icon :'', class:'', userSpace:'conseiller'},
    { path: 'conseiller/gestion_clients', title: 'Gerer les clients', icon :'', class:'', userSpace:'conseiller'}
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  //On reçoit le paramètre utilisateur en input depuis le composant app.component.ts
 
  
  menuItems: any[];
  utilisateur: string;

  constructor(private authentificationService : AuthentificationService, private router: Router) { }

  ngOnInit() {
    if (this.utilisateur==null) {
      this.utilisateur=this.authentificationService.getUserType(this.authentificationService.getUserinSession());
      this.menuItems = ROUTES.filter(menuItem => menuItem.userSpace===this.utilisateur); 
       
    this.authentificationService.getuserTypeasObs().subscribe(userType => {this.utilisateur=userType;
    this.menuItems = ROUTES.filter(menuItem => menuItem.userSpace===this.utilisateur); 
    }); 
  }
}
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
