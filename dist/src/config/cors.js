"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cors {
    Header(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH,DELETE');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type, Accept , Authorization');
        next();
    }
}
exports.default = new Cors();
//# sourceMappingURL=cors.js.map