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
exports.addAction = void 0;
const action_1 = __importDefault(require("../model/action"));
const addAction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield action_1.default.create(req.body);
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
exports.addAction = addAction;
