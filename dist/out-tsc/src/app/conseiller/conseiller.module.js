"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var conseiller_routing_modules_1 = require("./conseiller-routing.modules");
var conseiller_component_1 = require("./conseiller/conseiller.component");
var ConseillerModule = /** @class */ (function () {
    function ConseillerModule() {
    }
    ConseillerModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                conseiller_routing_modules_1.ConseillerRoutingModule
            ],
            declarations: [conseiller_component_1.ConseillerComponent]
        })
    ], ConseillerModule);
    return ConseillerModule;
}());
exports.ConseillerModule = ConseillerModule;
//# sourceMappingURL=conseiller.module.js.map