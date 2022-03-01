"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("./controller"));
class User {
    create(req, res) {
        const data = req.body;
        if (data.password !== data.repetirseha) {
            res.json({ 'password': 'O password esta diferente' });
        }
        else {
            return controller_1.default.novoUsuario(req, res);
        }
    }
    allusers(req, res) {
        return controller_1.default.allusers(req, res);
    }
    userId(req, res) {
        return controller_1.default.userbyId(req, res);
    }
    update(req, res) {
        return controller_1.default.updateUser(req, res);
    }
    delete(req, res) {
        return controller_1.default.deleteUser(req, res);
    }
}
exports.default = new User();
//# sourceMappingURL=user.js.map