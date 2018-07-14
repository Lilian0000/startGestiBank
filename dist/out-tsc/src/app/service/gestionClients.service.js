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
var http_1 = require("@angular/http");
var map_1 = require("rxjs/operators/map");
var catchError_1 = require("rxjs/operators/catchError");
var Observable_1 = require("rxjs/Observable");
var GestionClientsService = /** @class */ (function () {
    function GestionClientsService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:9090/GestBankBack/clients';
    }
    //récupère tout les clients
    GestionClientsService.prototype.getClients = function () {
        //return Clients;
        return this.http.get(this.apiUrl).pipe(map_1.map(function (res) { return res.json(); }), catchError_1.catchError(function (error) { return Observable_1.Observable.throw(error.json().error || "Server error"); }));
    };
    GestionClientsService.prototype.getClientsByConseiller = function (idConseiller) {
        var clients = [];
        for (var i = 0; i < Clients_1.Clients.length; i++) {
            if (Clients_1.Clients[i].idConseiller === idConseiller) {
                clients.push(Clients_1.Clients[i]);
            }
        }
        return clients;
    };
    //SPECIFIQUE A CLIENT notification
    GestionClientsService.prototype.getNumberOfNotAttClients = function () {
        /*var nbClients = 0;
        for (var i=0; i<Clients.length; i++) {
            if(Clients[i].idConseiller === null) {
                nbClients++;
            }
        }
        return nbClients;*/
        return this.http.get(this.apiUrl + '/nbnotattributed').pipe(map_1.map(function (res) { return res.json(); }), catchError_1.catchError(function (error) { return Observable_1.Observable.throw(error.json().error || "Server error"); }));
    };
    //SPECIFIQUE A CLIENTcomponent attribué les clients
    GestionClientsService.prototype.getNotAttributedClients = function () {
        /*var clients: Client[] = [];
        for (var i=0; i<Clients.length; i++) {
            if(Clients[i].idConseiller === null) {
                clients.push(Clients[i]);
            }
        }
        return clients;*/
        return this.http.get(this.apiUrl + '/notAttributed').pipe(map_1.map(function (res) { return res.json(); }), catchError_1.catchError(function (error) { return Observable_1.Observable.throw(error.json().error || "Server error"); }));
    };
    GestionClientsService.prototype.getClientById = function (id) {
        return this.http.get(this.apiUrl + '/' + id).pipe(map_1.map(function (res) { return res.json(); }), catchError_1.catchError(function (error) { return Observable_1.Observable.throw(error.json().error || "Server error"); }));
    };
    GestionClientsService.prototype.getClientBylastName = function (lastName) {
        for (var i = 0; i < Clients_1.Clients.length; i++)
            if (Clients_1.Clients[i].lastName === lastName) {
                return Clients_1.Clients[i];
            }
    };
    GestionClientsService.prototype.getClientByIdClient = function (idClient) {
        for (var i = 0; i < Clients_1.Clients.length; i++)
            if (Clients_1.Clients[i].numeroclient === idClient) {
                return Clients_1.Clients[i];
            }
    };
    GestionClientsService.prototype.getClientByMail = function (email) {
        for (var i = 0; i < Clients_1.Clients.length; i++)
            if (Clients_1.Clients[i].email === email) {
                return Clients_1.Clients[i];
            }
    };
    GestionClientsService.prototype.addClient = function (client) {
        return this.http.post(this.apiUrl, client).pipe(map_1.map(function (res) { return res.json(); }), catchError_1.catchError(function (error) { return Observable_1.Observable.throw(error.json().error || "Server error"); }));
    };
    GestionClientsService.prototype.editClient = function (client) {
        //console.log(client);
        return this.http.put(this.apiUrl + '/' + client.id, client).pipe(map_1.map(function (res) { return res.json(); }), catchError_1.catchError(function (error) { return Observable_1.Observable.throw(error.json().error || "Server error"); }));
        /*let oldClient = this.getClientById(client.id);
        client.idClient = oldClient.numeroclient;
        client.idConseiller = oldClient.idConseiller;
        client.password = oldClient.password;
        let index = (client.id - 1);
        Clients.splice(index, 1, client);*/
    };
    GestionClientsService.prototype.deleteClient = function (id) {
        return this.http.delete(this.apiUrl + '/' + id).pipe(map_1.map(function (res) { return res.json(); }), catchError_1.catchError(function (error) { return Observable_1.Observable.throw(error.json().error || "Server error"); }));
    };
    //generation aleatoire de numéro client avec vérification si le numéroClient éxiste déjà
    GestionClientsService.prototype.idClientGenerator = function (client) {
        var idClientExist = true;
        while (idClientExist) {
            var tempIdClient = Math.round(Math.random() * (9999 - 1111));
            if (!this.getClientByIdClient(tempIdClient)) {
                client.numeroclient = tempIdClient;
                idClientExist = false;
            }
        }
    };
    GestionClientsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], GestionClientsService);
    return GestionClientsService;
}());
exports.GestionClientsService = GestionClientsService;
//# sourceMappingURL=gestionClients.service.js.map