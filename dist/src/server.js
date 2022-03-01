"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("./config/cors"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("./route/routes"));
const body_parser_1 = __importDefault(require("body-parser"));
class Server {
    constructor() {
        this.cors = cors_1.default.Header;
        this.express = (0, express_1.default)();
        this.middleaware();
    }
    middleaware() {
        this.express.use((0, morgan_1.default)('dev'));
        this.express.use(express_1.default.urlencoded({ extended: true }));
        this.express.use(body_parser_1.default.urlencoded({ extended: true }));
        this.express.use(express_1.default.json());
        this.express.use(this.cors);
        this.router(this.express);
    }
    router(app) {
        routes_1.default.initRoutes(app);
    }
}
exports.default = new Server().express;
//# sourceMappingURL=server.js.map