import { Component, OnInit, Input } from '@angular/core';
import {AppComponent} from '../app.component';

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
    { path: 'accueil', title: 'Accueil',  icon: '', class: '', userSpace: 'guest'  },
    { path: 'simulateurCredit', title: 'Simulateur de crédit',  icon: '', class: '', userSpace: 'guest'  },
    { path: 'convertisseurDevise', title: 'Convertisseur de devise',  icon: '', class: '', userSpace: 'guest'  },
    { path: 'contact', title: 'Contacter la banque',  icon: '', class: '', userSpace: 'guest'  },
    { path: 'dashboard', title: 'Dashboard',  icon: '', class: '', userSpace: 'admin'  },
    { path: 'affectation', title: "Demandes d'affectation",  icon: '', class: '', userSpace: 'admin'  },
    { path: 'gestionConseillers', title: 'Gestion conseillers',  icon: '', class: '', userSpace: 'admin'  },
    { path: 'dashboardClients', title: 'Gestions clients',  icon: '', class: '', userSpace: 'admin'  },
    { path: 'consulter', title: 'Consulter',  icon: '', class: '', userSpace: 'client'  },
    { path: 'gerer', title: 'Gérer',  icon: '', class: '', userSpace: 'client'  },
    { path: 'demandeChequier', title: 'Demande chéquier',  icon: '', class: '', userSpace: 'client'  },
    { path: 'contact', title: 'Contacter la banque',  icon: '', class: '', userSpace: 'client'  }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  @Input() utilisateur;

  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem.userSpace===this.utilisateur);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
