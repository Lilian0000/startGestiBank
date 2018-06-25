"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var admin_module_1 = require("./admin/admin.module");
var client_module_1 = require("./client/client.module");
var conseiller_module_1 = require("./conseiller/conseiller.module");
var form_inscription_component_1 = require("./form-inscription/form-inscription.component");
var form_connexion_component_1 = require("./form-connexion/form-connexion.component");
var gestionClients_service_1 = require("./service/gestionClients.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                form_inscription_component_1.FormInscriptionComponent,
                form_connexion_component_1.FormConnexionComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpModule,
                admin_module_1.AdminModule,
                client_module_1.ClientModule,
                conseiller_module_1.ConseillerModule
            ],
            providers: [gestionClients_service_1.GestionClientsService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map