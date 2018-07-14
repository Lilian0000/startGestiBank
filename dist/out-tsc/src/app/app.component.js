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
var authentification_service_1 = require("./service/authentification.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(authentificationService) {
        this.authentificationService = authentificationService;
        //if (this.authentificationService.getUserinSession()) {
        /*console.log(this.authentificationService.getUserinSession());
        this.authentificationService.setUserType(this.authentificationService.getUserType(this.authentificationService.getUserinSession()));
        console.log(this.userType);
        this.authentificationService.getuserTypeasObs().subscribe(userType => { this.userType = userType; });*/
        //}
        //this.userType = this.authentificationService.getUserType(this.authentificationService.getUserinSession());*/
        //notifySideBar.subscribe(userType => this.userType = this.authentificationService.getUserType(this.authentificationService.getUserinSession()));
    }
    AppComponent.prototype.ngOnInit = function () {
        this.authentificationService.setUserType(this.authentificationService.getUserType(this.authentificationService.getUserinSession()));
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            providers: []
        }),
        __metadata("design:paramtypes", [authentification_service_1.AuthentificationService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map