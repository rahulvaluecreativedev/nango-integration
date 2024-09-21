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
exports.decode = exports.encode = exports.verifyJwtToken = exports.accessToken = exports.comparePasswords = exports.hashPassword = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const base64_url_1 = __importDefault(require("base64-url"));
const hashPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcryptjs_1.default.hash(password, 12);
});
exports.hashPassword = hashPassword;
const comparePasswords = (password, encodedPassword) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcryptjs_1.default.compare(password, encodedPassword);
});
exports.comparePasswords = comparePasswords;
const accessToken = (user) => __awaiter(void 0, void 0, void 0, function* () {
    return yield jsonwebtoken_1.default.sign(user, process.env.JWT_SECRET);
});
exports.accessToken = accessToken;
const verifyJwtToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    return yield jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
});
exports.verifyJwtToken = verifyJwtToken;
const encode = (val) => __awaiter(void 0, void 0, void 0, function* () {
    return base64_url_1.default.encode(val);
});
exports.encode = encode;
const decode = (val) => __awaiter(void 0, void 0, void 0, function* () {
    const decodeString = base64_url_1.default.decode(val);
    return JSON.parse(decodeString);
});
exports.decode = decode;
