"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var form_inscription_component_1 = require("./form-inscription/form-inscription.component");
var form_connexion_component_1 = require("./form-connexion/form-connexion.component");
var guest_component_1 = require("./guest/guest.component");
var unauthorized_espace_page_component_1 = require("./errorPages/unauthorized-espace-page/unauthorized-espace-page.component");
var routes = [
    { path: '', component: guest_component_1.GuestComponent },
    { path: 'inscription', component: form_inscription_component_1.FormInscriptionComponent },
    { path: 'connexion', component: form_connexion_component_1.FormConnexionComponent },
    { path: 'unauthorizedUserSpace', component: unauthorized_espace_page_component_1.UnauthorizedEspacePageComponent }
    //{path: '**', redirectTo:''}
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map