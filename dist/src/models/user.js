"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const sequelize_1 = require("sequelize");
const sequelizeConnection_1 = __importDefault(require("../config/sequelizeConnection"));
class User extends sequelize_1.Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
        // define association here
    }
}
User.init({
    name: {
        type: sequelize_1.DataTypes.STRING,
        validate: {
            notEmpty: true
        }
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        validate: {
            notEmpty: true
        }
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        validate: {
            notEmpty: true
        }
    }
}, {
    sequelize: sequelizeConnection_1.default,
    modelName: 'User',
});
User.beforeCreate((user) => {
    return hasPassword(user);
});
User.beforeUpdate((user) => {
    return hasPassword(user);
});
function hasPassword(user) {
    const salt = bcrypt_1.default.genSaltSync(10);
    user.set('password', bcrypt_1.default.hashSync(user.password, salt));
}
exports.default = User;
//# sourceMappingURL=user.js.map