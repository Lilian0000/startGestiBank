import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { AuthentificationService } from '../service/authentification.service';
import { Router } from '@angular/router';
@Component({
    // moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
  })

export class NavbarComponent implements OnInit {
    userType;

    private listTitles: any[];
    location: Location;
    private toggleButton: any;
    private sidebarVisible: boolean;
    private sub:any;

    constructor(location: Location,  private element: ElementRef, private authentificationService : AuthentificationService,
      private router: Router) {
      this.location = location;
      this.sidebarVisible = false;
    }

    ngOnInit(){
      if (this.userType==null) {
        this.userType = this.authentificationService.getUserType(this.authentificationService.getUserinSession());
        this.listTitles = ROUTES.filter(listTitle => listTitle);
      }
      this.authentificationService.getuserTypeasObs().subscribe(userType => {this.userType=userType;
      this.listTitles = ROUTES.filter(listTitle => listTitle);
      });
   
      const navbar: HTMLElement = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        
    }

    sidebarOpen() {
      const toggleButton = this.toggleButton;
      const body = document.getElementsByTagName('body')[0];
      setTimeout(function(){
        toggleButton.classList.add('toggled');
      }, 500);
      body.classList.add('nav-open');

      this.sidebarVisible = true;
    };

    sidebarClose() {
      const body = document.getElementsByTagName('body')[0];
      this.toggleButton.classList.remove('toggled');
      this.sidebarVisible = false;
      body.classList.remove('nav-open');
    };

    sidebarToggle() {
        if (this.sidebarVisible === false) {
          this.sidebarOpen();
        } else {
          this.sidebarClose();
        }
     };

      Deconexion() {
        this.authentificationService.logout();
        this.userType = "guest";
        this.authentificationService.clearUserType();
        this.authentificationService.setUserType('guest');
        this.router.navigate(['']);
     }

    getTitle(){
      return 'Espace '+ this.userType;
    }

    isGuest(){
      if (this.userType==='guest')
        return true;
      else 
        return false;
    }
    
  }
