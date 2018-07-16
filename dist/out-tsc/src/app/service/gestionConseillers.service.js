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
var Conseillers_1 = require("../modeles/Conseillers");
var http_1 = require("@angular/http");
var map_1 = require("rxjs/operators/map");
var catchError_1 = require("rxjs/operators/catchError");
var Observable_1 = require("rxjs/Observable");
var GestionConseillersService = /** @class */ (function () {
    function GestionConseillersService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:9090/GestBankBack/conseillers';
    }
    //récupère tout les Conseillers
    GestionConseillersService.prototype.getConseillers = function () {
        return this.http.get(this.apiUrl).pipe(map_1.map(function (res) { return res.json(); }), catchError_1.catchError(function (error) { return Observable_1.Observable.throw(error.json().error || "Server error"); }));
    };
    GestionConseillersService.prototype.getConseillerById = function (id) {
        return Conseillers_1.Conseillers[id - 1];
    };
    GestionConseillersService.prototype.getConseillerBylastName = function (lastName) {
        for (var i = 0; i < Conseillers_1.Conseillers.length; i++)
            if (Conseillers_1.Conseillers[i].lastName === lastName) {
                return Conseillers_1.Conseillers[i];
            }
    };
    GestionConseillersService.prototype.addConseiller = function (conseiller) {
        conseiller.id = Conseillers_1.Conseillers.length + 1;
        Conseillers_1.Conseillers.push(conseiller);
    };
    GestionConseillersService.prototype.deleteConseiller = function (conseiller) {
        var index;
        index = Conseillers_1.Conseillers.indexOf(conseiller);
        if (Conseillers_1.Conseillers.indexOf(conseiller) >= 0) {
            Conseillers_1.Conseillers.splice(index, 1);
        }
    };
    GestionConseillersService.prototype.attributeClientToConseiller = function (idClient, conseiller) {
        return this.http.put(this.apiUrl + '/clients/' + idClient, conseiller).pipe(map_1.map(function (res) { return res.json(); }), catchError_1.catchError(function (error) { return Observable_1.Observable.throw(error.json().error || "Server error"); }));
    };
    GestionConseillersService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], GestionConseillersService);
    return GestionConseillersService;
}());
exports.GestionConseillersService = GestionConseillersService;
//# sourceMappingURL=gestionConseillers.service.js.map