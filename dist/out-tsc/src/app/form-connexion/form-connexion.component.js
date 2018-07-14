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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var authentification_service_1 = require("../service/authentification.service");
var FormConnexionComponent = /** @class */ (function () {
    //@Output() notifySideBar: EventEmitter<any> = new EventEmitter();
    function FormConnexionComponent(router, authentificationService) {
        this.router = router;
        this.authentificationService = authentificationService;
    }
    FormConnexionComponent.prototype.ngOnInit = function () {
        //console.log(this.authentificationService.getUserInTempSession());
        //console.log(this.authentificationService.getUserInLocalSession());
        //pour michel
        //console.log(this.authentificationService.getUserType(this.authentificationService.getUserinSession()));
        //console.log(this.authentificationService.isConnected());
        this.guestConnexionForm = new forms_1.FormGroup({
            email: new forms_1.FormControl('', [
                forms_1.Validators.required,
                forms_1.Validators.pattern("[^ @]*@[^ @]*")
            ]),
            password: new forms_1.FormControl('', forms_1.Validators.required),
        });
    };
    FormConnexionComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.guestConnexionForm.value);
        if (this.guestConnexionForm.valid) {
            this.authentificationService.getUserAtConnexion(this.guestConnexionForm.value).subscribe(function (user) {
                _this.user = user;
                _this.authentificationService.inputUserInLocalSession(_this.user);
                _this.authentificationService.inputUserInTempSession(_this.user);
                /*console.log(this.authentificationService.getUserInTempSession());
                console.log(this.authentificationService.getUserInLocalSession());
                console.log("Connexion réussi!");*/
                //this.notifySideBar.emit(this.authentificationService.getUserType(this.user));
                _this.authentificationService.clearUserType();
                _this.authentificationService.setUserType(_this.authentificationService.getUserType(_this.user));
                _this.authentificationService.connexionRedirection(_this.user);
            }, function (error) {
                //console.log("Email ou mot de passe erroné!");
                //console.log(error); console.log(error.status);
                if (error.status == 0) {
                    _this.errorMessage = "Le Serveur ne répond pas. Veuillez réassayer ultérieurement.";
                }
                else {
                    _this.errorMessage = "Email ou mot de passe incorrect!";
                }
            });
        }
    };
    FormConnexionComponent = __decorate([
        core_1.Component({
            selector: 'app-form-connexion',
            templateUrl: './form-connexion.component.html',
            styleUrls: ['./form-connexion.component.css'],
            providers: []
        }),
        __metadata("design:paramtypes", [router_1.Router,
            authentification_service_1.AuthentificationService])
    ], FormConnexionComponent);
    return FormConnexionComponent;
}());
exports.FormConnexionComponent = FormConnexionComponent;
//# sourceMappingURL=form-connexion.component.js.map