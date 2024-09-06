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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = process.env.PORT_NUMBER || 7001;
const app = (0, express_1.default)();
const action_1 = require("./controller/action");
const webhook_1 = require("./controller/webhook");
const connection_1 = require("./controller/connection");
const automation_1 = require("./controller/automation");
const utils_1 = require("./utils");
const dbConnection_1 = __importDefault(require("./config/dbConnection"));
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, dbConnection_1.default)();
    });
})();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.send("success");
}));
app.post("/api/addAction", action_1.addAction);
app.post("/api/webhook", webhook_1.webhook);
app.post("/api/newConnection", connection_1.addConnection);
app.post("/api/newAutomation", automation_1.newAutomation);
app.post("/api/sendEmail", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, utils_1.sendEmail)(req.body.config, req.body.emailData);
    return res.send("hello");
}));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
