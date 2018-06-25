"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./User");
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(id, lastName, firstName, email, password, address, phonenumber, matricule, fonction, contractStartingDate) {
        var _this = _super.call(this, id, lastName, firstName, email, password, address, phonenumber) || this;
        _this.matricule = matricule;
        _this.fonction = fonction;
        _this.contractStartingDate = contractStartingDate;
        return _this;
    }
    return Admin;
}(User_1.User));
exports.Admin = Admin;
//# sourceMappingURL=Admin.js.map