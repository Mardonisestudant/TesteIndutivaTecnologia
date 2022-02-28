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
const user_1 = __importDefault(require("./../../models/user"));
class Userservice {
    cadastrar(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_1.default.create(data);
                if (!user)
                    throw new Error();
                return data;
            }
            catch (error) {
                return error;
            }
        });
    }
    all() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const alluser = yield user_1.default.findAll();
                if (Object.keys(alluser).length === 0)
                    throw new Error();
                return alluser;
            }
            catch (error) {
                return error;
            }
        });
    }
    userId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield user_1.default.findByPk(id);
            }
            catch (error) {
                return error;
            }
        });
    }
    update(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const update = yield user_1.default.update({ name: data.name, email: data.email }, {
                    where: {
                        id: parseInt(data.id, 10)
                    }
                });
                if (!update)
                    throw new Error();
                return true;
            }
            catch (error) {
                return false;
            }
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deleteUser = yield user_1.default.destroy({ where: { 'id': id } });
                if (!deleteUser)
                    throw new Error();
                return true;
            }
            catch (error) {
                return false;
            }
        });
    }
}
exports.default = new Userservice();
//# sourceMappingURL=services.js.map