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
var gestionClients_service_1 = require("../service/gestionClients.service");
var Client_1 = require("../modeles/Client");
var FormInscriptionComponent = /** @class */ (function () {
    function FormInscriptionComponent(route, router, gestionClients) {
        this.route = route;
        this.router = router;
        this.gestionClients = gestionClients;
    }
    FormInscriptionComponent.prototype.ngOnInit = function () {
        this.clientForm = new forms_1.FormGroup({
            firstName: new forms_1.FormControl('', forms_1.Validators.required),
            lastName: new forms_1.FormControl('', forms_1.Validators.required),
            email: new forms_1.FormControl('', [
                forms_1.Validators.required,
                forms_1.Validators.pattern("[^ @]*@[^ @]*")
            ]),
            password: new forms_1.FormControl('', forms_1.Validators.required),
            address: new forms_1.FormControl('', forms_1.Validators.required),
            phonenumber: new forms_1.FormControl('', forms_1.Validators.required),
        });
        if (this.id) {
            this.gestionClients.getClientById(this.id);
        }
    };
    FormInscriptionComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.clientForm.valid) {
            var client = new Client_1.Client(this.id, this.clientForm.controls['firstName'].value, this.clientForm.controls['lastName'].value, this.clientForm.controls['email'].value, this.clientForm.controls['password'].value, this.clientForm.controls['address'].value, this.clientForm.controls['phonenumber'].value, null, null);
            this.gestionClients.addClient(client).subscribe(function (client) {
                _this.clientForm.reset();
                _this.router.navigate(['/client']);
            });
            //this.gestionClients.idClientGenerator(client);
        }
    };
    FormInscriptionComponent.prototype.redirectUserPage = function () {
        this.router.navigate(['']);
    };
    FormInscriptionComponent = __decorate([
        core_1.Component({
            selector: 'app-form-inscription',
            templateUrl: './form-inscription.component.html',
            styleUrls: ['./form-inscription.component.css'],
            providers: [gestionClients_service_1.GestionClientsService]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            gestionClients_service_1.GestionClientsService])
    ], FormInscriptionComponent);
    return FormInscriptionComponent;
}());
exports.FormInscriptionComponent = FormInscriptionComponent;
//# sourceMappingURL=form-inscription.component.js.map