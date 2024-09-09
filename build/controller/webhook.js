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
exports.webhook = void 0;
const connection_1 = __importDefault(require("../model/connection"));
const automation_1 = __importDefault(require("../model/automation"));
const utils_1 = require("../utils");
const mongodb_1 = require("mongodb");
const webhook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        console.log("webhook request......", req.body);
        const webhookType = req.body.type;
        if (webhookType === "auth" && req.body.success) {
            yield connection_1.default.findOneAndUpdate({ connectionId: req.body.connectionId }, { active: true });
        }
        if (webhookType === "sync") {
            if (req.body.providerConfigKey === "google-email") {
                console.log("google-mail...");
            }
            if (req.body.providerConfigKey === "slack") {
                if (req.body.syncName === "channels") {
                }
                if (req.body.syncName === "users") {
                }
                if (req.body.syncName === "messages") {
                }
                console.log("slack....");
            }
        }
        if (webhookType === "forward") {
            console.log("inside forwad....");
            if (req.body.providerConfigKey === "slack") {
                if (req.body.payload.event.type === "channel_created") {
                    console.log("yes it is slack webhoook====");
                    let myAutomation = yield findAutomation(req.body.connectionId);
                    console.log("myAutomation", myAutomation);
                    yield (0, utils_1.sendEmail)({
                        integrationId: myAutomation.actionPerform.integrationId, connectionId: myAutomation.actionPerform.connectionId, actionName: (_a = myAutomation.actionName) === null || _a === void 0 ? void 0 : _a.appUniqueName
                    }, myAutomation.triggerValue);
                }
            }
        }
        return res.status(200).json({
            success: true,
            message: "success"
        });
    }
    catch (error) {
        console.log("error", error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
});
exports.webhook = webhook;
const findAutomation = (connectionId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("inside the find automation===", connectionId);
        const findConn = yield connection_1.default.findOne({
            connectionId: connectionId
        }).lean();
        console.log("findConn====", findConn);
        if (!findConn) {
            return null;
        }
        const findAutom = yield automation_1.default.aggregate([
            {
                $lookup: {
                    from: "connections",
                    localField: "action",
                    foreignField: "_id",
                    as: "actionPerform"
                }
            },
            { $unwind: "$actionPerform" },
            {
                $lookup: {
                    from: "connections",
                    localField: "trigger",
                    foreignField: "_id",
                    as: "triggerDetail"
                }
            },
            { $unwind: "$triggerDetail" },
            {
                $lookup: {
                    from: "actions",
                    localField: "actionPerform.actionId",
                    foreignField: "_id",
                    as: "actionName"
                }
            },
            { $unwind: "$actionName" },
            {
                $lookup: {
                    from: "actions",
                    localField: "triggerDetail.actionId",
                    foreignField: "_id",
                    as: "triggerName"
                }
            },
            { $unwind: "$triggerName" },
            { $match: { trigger: new mongodb_1.ObjectId(findConn._id) } }
        ]);
        return findAutom[0];
    }
    catch (error) {
        console.log("error");
        return null;
    }
});
