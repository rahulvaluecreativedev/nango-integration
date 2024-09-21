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
exports.getAutomation = exports.createAutomation = void 0;
const automation_1 = __importDefault(require("../model/automation"));
const createAutomation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield automation_1.default.create(req.body);
        return res.status(201).json({
            success: true,
            message: "Data Added!",
            data: data
        });
    }
    catch (error) {
        console.log("error");
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
});
exports.createAutomation = createAutomation;
const getAutomation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("start queryy...");
        const data = yield automation_1.default.aggregate([
            {
                $lookup: {
                    from: "connections",
                    localField: "Actions.connectionId",
                    foreignField: "_id",
                    as: "actionConnectionDetail"
                }
            },
            { $unwind: "$actionConnectionDetail" },
            {
                $lookup: {
                    from: "connections",
                    localField: "trigger.connectionId",
                    foreignField: "_id",
                    as: "triggerConnectionDetail"
                }
            },
            { $unwind: "$triggerConnectionDetail" },
            {
                $lookup: {
                    from: "actions",
                    localField: "trigger.actionId",
                    foreignField: "_id",
                    as: "triggerActionDetail"
                }
            },
            { $unwind: "$triggerActionDetail" },
            {
                $lookup: {
                    from: "actions",
                    localField: "Actions.actionId",
                    foreignField: "_id",
                    as: "actionPerformDetail"
                }
            },
            { $unwind: "$actionPerformDetail" },
            { $match: {} }
        ]);
        // console.log("data", data)
        return res.status(201).json({
            success: true,
            message: "Fetch Data",
            data: data
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
exports.getAutomation = getAutomation;
