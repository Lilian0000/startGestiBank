"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_module_1 = require("./client.module");
describe('ClientModule', function () {
    var clientModule;
    beforeEach(function () {
        clientModule = new client_module_1.ClientModule();
    });
    it('should create an instance', function () {
        expect(clientModule).toBeTruthy();
    });
});
//# sourceMappingURL=client.module.spec.js.map