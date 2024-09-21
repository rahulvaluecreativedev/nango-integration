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
exports.signUp = void 0;
const user_1 = __importDefault(require("../model/user"));
const utils_1 = require("../helper/utils");
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { fullName, email, password } = req.body;
        // check email already exist or not...
        let findUserByEmail = yield user_1.default.findOne({ email: email }).lean();
        if (findUserByEmail) {
            return res.status(403).json({
                success: false,
                message: "Email already exist!"
            });
        }
        // hashPassword
        const hashPass = yield (0, utils_1.hashPassword)(password);
        let userData = {
            fullName: fullName,
            email: email,
            password: hashPass
        };
        const newUser = yield user_1.default.create(userData);
        const jwtToken = yield (0, utils_1.accessToken)({ userId: newUser._id, email: newUser.email, role: newUser.role });
        return res.status(201).json({
            success: true,
            message: "SignUp successfully!",
            data: {
                accessToken: jwtToken,
                user: newUser
            }
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
exports.signUp = signUp;
