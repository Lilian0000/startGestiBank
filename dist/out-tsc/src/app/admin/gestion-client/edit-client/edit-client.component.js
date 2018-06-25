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
var gestionClients_service_1 = require("../../../service/gestionClients.service");
var Client_1 = require("../../../modeles/Client");
var EditClientComponent = /** @class */ (function () {
    function EditClientComponent(route, router, gestionClientsService) {
        this.route = route;
        this.router = router;
        this.gestionClientsService = gestionClientsService;
    }
    EditClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.client = _this.gestionClientsService.getClients;
            _this.clientForm = new forms_1.FormGroup({
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
        }, onSubmit(), {
            if: function (clientForm, valid) {
                var client = new Client_1.Client(this.id, this.clientForm.controls['firstName'].value, this.clientForm.controls['lastName'].value, this.clientForm.controls['email'].value, this.clientForm.controls['password'].value, this.clientForm.controls['address'].value, this.clientForm.controls['phonenumber'].value, null, null);
                this.gestionClients.editClient(client);
                this.gestionClients.idClientGenerator(client);
                this.clientForm.reset();
                this.router.navigate(['/admin/gestion_client']);
            }
        }, redirectUserPage(), {
            this: .router.navigate(['/admin/gestion_client'])
        });
    };
    EditClientComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-client',
            templateUrl: './edit-client.component.html',
            styleUrls: ['./edit-client.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            gestionClients_service_1.GestionClientsService])
    ], EditClientComponent);
    return EditClientComponent;
}());
exports.EditClientComponent = EditClientComponent;
//# sourceMappingURL=edit-client.component.js.map