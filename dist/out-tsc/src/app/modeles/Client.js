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
var Client = /** @class */ (function (_super) {
    __extends(Client, _super);
    function Client(id, lastName, firstName, email, password, address, phonenumber, numeroclient, idConseiller) {
        var _this = _super.call(this, id, lastName, firstName, email, password, address, phonenumber) || this;
        _this.numeroclient = numeroclient;
        _this.idConseiller = idConseiller;
        console.log("lastName =" + lastName + ", firstName =" + firstName);
        return _this;
    }
    return Client;
}(User_1.User));
exports.Client = Client;
//# sourceMappingURL=Client.js.map