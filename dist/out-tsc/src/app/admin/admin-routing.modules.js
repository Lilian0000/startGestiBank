"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var admin_component_1 = require("./admin/admin.component");
var gestion_client_component_1 = require("./gestion-client/gestion-client.component");
var add_client_component_1 = require("./gestion-client/add-client/add-client.component");
var edit_client_component_1 = require("./gestion-client/edit-client/edit-client.component");
var attribute_clients_component_1 = require("./attribute-clients/attribute-clients.component");
var attribute_client_to_conseiller_component_1 = require("./attribute-clients/attribute-client-to-conseiller/attribute-client-to-conseiller.component");
var role_gard_service_1 = require("../service/role-gard.service");
var adminRoutes = [
    { path: 'admin', component: admin_component_1.AdminComponent, canActivate: [role_gard_service_1.RoleGardService], data: { expectedRole: 'admin' } },
    { path: 'admin/attribute_clients', component: attribute_clients_component_1.AttributeClientsComponent, canActivate: [role_gard_service_1.RoleGardService], data: { expectedRole: 'admin' } },
    { path: 'admin/attribute_clients/attribute_client_to_conseiller/:id', component: attribute_client_to_conseiller_component_1.AttributeClientToConseillerComponent, canActivate: [role_gard_service_1.RoleGardService], data: { expectedRole: 'admin' } },
    { path: 'admin/add_client', component: add_client_component_1.AddClientComponent, canActivate: [role_gard_service_1.RoleGardService], data: { expectedRole: 'admin' } },
    { path: 'admin/edit_client/:id', component: edit_client_component_1.EditClientComponent, canActivate: [role_gard_service_1.RoleGardService], data: { expectedRole: 'admin' } },
    { path: 'admin/gestion_client', component: gestion_client_component_1.GestionClientComponent, canActivate: [role_gard_service_1.RoleGardService], data: { expectedRole: 'admin' } }
    /*children: [
        {
            path: 'add_client', component: AddClientComponent,
        },
        {
            path: 'edit_client/:id', component: EditClientComponent,
        }
    ]
}*/
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(adminRoutes)],
            exports: [router_1.RouterModule]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());
exports.AdminRoutingModule = AdminRoutingModule;
//# sourceMappingURL=admin-routing.modules.js.map