"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../modules/user/user"));
class Routes {
    initRoutes(app) {
        app.route('/user').post(user_1.default.create);
        app.route('/users').get(user_1.default.allusers);
        app.route('/user/:id').get(user_1.default.userId);
        app.route('/user/update').put(user_1.default.update);
        app.route('/user/:id').delete(user_1.default.delete);
    }
}
exports.default = new Routes();
//# sourceMappingURL=routes.js.map