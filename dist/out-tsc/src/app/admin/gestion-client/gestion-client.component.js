"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var gestionClients_service_1 = require("../../service/gestionClients.service");
var router_1 = require("@angular/router");
var core_2 = require("@angular/core");
var GestionClientComponent = /** @class */ (function () {
    function GestionClientComponent(router, gestionClientsService) {
        this.router = router;
        this.gestionClientsService = gestionClientsService;
    }
    GestionClientComponent.prototype.ngOnInit = function () {
        this.getClients();
    };
    GestionClientComponent.prototype.getClients = function () {
        this.clients = this.gestionClientsService.getClients();
    };
    GestionClientComponent.prototype.redirectNewClientPage = function () {
        this.router.navigate(['admin/gestion_client/add_client']);
    };
    GestionClientComponent.prototype.editClientPage = function (client) {
        if (client) {
            this.router.navigate(['admin/gestion_client/edit_client', client.id]);
        }
    };
    GestionClientComponent.prototype.onDelete = function (client) {
        {
            this.gestionClientsService.deleteClient(client);
        }
    };
    __decorate([
        core_2.Input(),
        __metadata("design:type", Object)
    ], GestionClientComponent.prototype, "client", void 0);
    GestionClientComponent = __decorate([
        core_1.Component({
            selector: 'app-gestion-client',
            templateUrl: './gestion-client.component.html',
            styleUrls: ['./gestion-client.component.css'],
            providers: [gestionClients_service_1.GestionClientsService]
        }),
        __metadata("design:paramtypes", [router_1.Router, gestionClients_service_1.GestionClientsService])
    ], GestionClientComponent);
    return GestionClientComponent;
}());
exports.GestionClientComponent = GestionClientComponent;
//# sourceMappingURL=gestion-client.component.js.map