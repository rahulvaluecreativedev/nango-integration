"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const webhook_1 = __importDefault(require("./webhook"));
const app_1 = __importDefault(require("./app"));
const connection_1 = __importDefault(require("./connection"));
const action_1 = __importDefault(require("./action"));
const automation_1 = __importDefault(require("./automation"));
const authentication_1 = __importDefault(require("./authentication"));
const routers = [
    {
        path: "/api/authentication",
        handler: authentication_1.default
    },
    {
        path: "/api/webhook",
        handler: webhook_1.default
    },
    {
        path: "/api/app",
        handler: app_1.default
    },
    {
        path: "/api/connection",
        handler: connection_1.default
    },
    {
        path: "/api/action",
        handler: action_1.default
    },
    {
        path: "/api/automation",
        handler: automation_1.default
    }
];
exports.default = routers;
