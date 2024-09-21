"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const authentication_1 = require("../controller/authentication");
router.post("/signUp", authentication_1.signUp);
exports.default = router;
