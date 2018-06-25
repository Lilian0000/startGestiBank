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
var Clients_1 = require("../modeles/Clients");
var GestionClientsService = /** @class */ (function () {
    function GestionClientsService() {
    }
    //récupère tout les clients
    GestionClientsService.prototype.getClients = function () { return Clients_1.Clients; };
    GestionClientsService.prototype.getClientById = function (id) {
        return Clients_1.Clients[id - 1];
    };
    GestionClientsService.prototype.getClientBylastName = function (lastName) {
        for (var i = 0; i < Clients_1.Clients.length; i++)
            if (Clients_1.Clients[i].lastName === lastName) {
                return Clients_1.Clients[i];
            }
    };
    GestionClientsService.prototype.getClientByIdClient = function (idClient) {
        for (var i = 0; i < Clients_1.Clients.length; i++)
            if (Clients_1.Clients[i].idClient === idClient) {
                return Clients_1.Clients[i];
            }
    };
    GestionClientsService.prototype.addClient = function (client) {
        client.id = Clients_1.Clients.length + 1;
        Clients_1.Clients.push(client);
    };
    GestionClientsService.prototype.editClient = function (client) {
        var index = Clients_1.Clients.indexOf(client);
        Clients_1.Clients.splice(index, 1, client);
    };
    GestionClientsService.prototype.deleteClient = function (client) {
        var index = Clients_1.Clients.indexOf(client);
        Clients_1.Clients.splice(index, 1);
    };
    //generation aleatoire de numéro client avec vérification si le numéroClient éxiste déjà
    GestionClientsService.prototype.idClientGenerator = function (client) {
        var idClientExist = true;
        while (idClientExist) {
            var tempIdClient = Math.round(Math.random() * (9999 - 1111));
            if (!this.getClientByIdClient(tempIdClient)) {
                client.idClient = tempIdClient;
                idClientExist = false;
            }
        }
    };
    GestionClientsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], GestionClientsService);
    return GestionClientsService;
}());
exports.GestionClientsService = GestionClientsService;
//# sourceMappingURL=gestionClients.service.js.map