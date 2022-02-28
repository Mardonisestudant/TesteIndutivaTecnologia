"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_json_1 = __importDefault(require("../config/config.json"));
const pgdialect = config_json_1.default.development.dialect;
const sqConnection = new sequelize_1.Sequelize(config_json_1.default.development.database, config_json_1.default.development.username, config_json_1.default.development.password, {
    host: config_json_1.default.development.host,
    dialect: pgdialect
});
exports.default = sqConnection;
//# sourceMappingURL=sequelizeConnection.js.map