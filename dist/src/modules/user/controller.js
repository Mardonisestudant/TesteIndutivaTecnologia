"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = __importDefault(require("./services"));
class UserController {
    novoUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            try {
                const user = yield services_1.default.cadastrar(data);
                if (!user)
                    throw new Error();
                res.status(201).json({ 'user': 'Usuário cadastrado !' });
            }
            catch (err) {
                res.status(500).json({ 'error': 'Não foi possivel fazer cadastro' });
            }
        });
    }
    allusers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allusers = yield services_1.default.all();
                if (!allusers)
                    throw new Error();
                res.status(200).json({ 'users': allusers });
            }
            catch (error) {
                res.status(204).json({ 'error': 'Lista vazia' });
            }
        });
    }
    userbyId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            if (!id)
                throw new Error();
            try {
                const userId = yield services_1.default.userId(parseInt(id, 10));
                if (userId != null) {
                    res.status(200).json({ 'user': userId });
                }
                if (userId === null) {
                    res.json({ 'message': 'Usuario não encontrado' });
                }
            }
            catch (error) {
                res.status(400).json({ 'message': 'Usuario não encontrado' });
            }
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = {
                "id": req.body.id,
                "name": req.body.name,
                "email": req.body.email
            };
            if (!data)
                throw new Error();
            try {
                const update = yield services_1.default.update(data);
                if (update)
                    throw new Error();
                res.status(200).json({ 'message': 'User atualizado!' });
            }
            catch (error) {
                res.status(400).json({ 'error': 'Não foi possivel fazer atualização' });
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            if (!id)
                throw new Error();
            try {
                const deleteUser = yield services_1.default.deleteUser(parseInt(id, 10));
                if (!deleteUser)
                    throw new Error();
                res.status(200).json({ 'message': 'User deletado !' });
            }
            catch (error) {
                res.status(400).json({ 'error': 'Não foi possivel deletar usuario' });
            }
        });
    }
}
exports.default = new UserController();
//# sourceMappingURL=controller.js.map