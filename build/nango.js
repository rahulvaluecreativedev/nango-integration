"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.nango = void 0;
const node_1 = require("@nangohq/node");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.nango = new node_1.Nango({
    host: (_a = process.env['NANGO_HOST']) !== null && _a !== void 0 ? _a : 'https://api.nango.dev',
    secretKey: process.env['NANGO_SECRET_KEY'],
});
