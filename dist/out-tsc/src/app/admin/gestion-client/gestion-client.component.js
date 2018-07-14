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
var GestionClientComponent = /** @class */ (function () {
    function GestionClientComponent(router, gestionClientsService) {
        this.router = router;
        this.gestionClientsService = gestionClientsService;
    }
    GestionClientComponent.prototype.ngOnInit = function () {
        this.getClients();
    };
    GestionClientComponent.prototype.getClients = function () {
        var _this = this;
        this.gestionClientsService.getClients().subscribe(function (clients) { _this.clients = clients; }, function (err) { console.log(err); });
    };
    GestionClientComponent.prototype.redirectNewClientPage = function () {
        this.router.navigate(['admin/add_client']);
    };
    GestionClientComponent.prototype.editClientPage = function (client) {
        if (client) {
            this.router.navigate(['admin/edit_client', client.id]);
        }
    };
    GestionClientComponent.prototype.onDelete = function (client) {
        var _this = this;
        {
            this.gestionClientsService.deleteClient(client.id).subscribe(function (res) {
                _this.getClients();
                _this.router.navigate(['admin/gestion_client']);
            });
        }
    };
    GestionClientComponent = __decorate([
        core_1.Component({
            selector: 'app-gestion-client',
            templateUrl: './gestion-client.component.html',
            styleUrls: ['./gestion-client.component.css'],
            providers: []
        }),
        __metadata("design:paramtypes", [router_1.Router, gestionClients_service_1.GestionClientsService])
    ], GestionClientComponent);
    return GestionClientComponent;
}());
exports.GestionClientComponent = GestionClientComponent;
//# sourceMappingURL=gestion-client.component.js.map