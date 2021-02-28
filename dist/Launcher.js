"use strict";
exports.__esModule = true;
var Server_1 = require("./Server/Server");
var Laucher = /** @class */ (function () {
    function Laucher() {
        this.server = new Server_1.Server();
    }
    Laucher.prototype.launchApp = function () {
        console.log('Het werkt');
        this.server.createServer();
    };
    return Laucher;
}());
new Laucher().launchApp();
