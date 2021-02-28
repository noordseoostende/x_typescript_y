"use strict";
exports.__esModule = true;
exports.Server = void 0;
var http_1 = require("http");
var Server = /** @class */ (function () {
    function Server() {
    }
    Server.prototype.createServer = function () {
        http_1.createServer(function (req, res) {
            console.log('geeft verzoek uit: ' + req.url);
            var basePath = Utils.getUrlBasePath(req.url);
            res.end();
        }).listen(8080);
        console.log('server start');
    };
    return Server;
}());
exports.Server = Server;
