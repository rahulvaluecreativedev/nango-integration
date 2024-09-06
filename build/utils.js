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
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const nango_1 = require("./nango");
const sendEmail = (config, emailData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield nango_1.nango.triggerAction(config.integrationId, config.connectionId, config.actionName, {
            from: emailData.from,
            headers: emailData.headers,
            to: emailData.to,
            subject: emailData.subject,
            body: emailData.body,
        });
        return true;
    }
    catch (error) {
        console.log("error", error);
        return false;
    }
});
exports.sendEmail = sendEmail;
