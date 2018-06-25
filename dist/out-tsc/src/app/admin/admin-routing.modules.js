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
var adminRoutes = [
    { path: 'admin', component: admin_component_1.AdminComponent, },
    { path: 'admin/gestion_client', component: gestion_client_component_1.GestionClientComponent,
        children: [
            {
                path: 'add_client', component: add_client_component_1.AddClientComponent,
            },
            {
                path: 'edit_client/:id', component: edit_client_component_1.EditClientComponent,
            }
        ]
    },
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