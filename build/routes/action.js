"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const action_1 = require("../controller/action");
router.post("/create", action_1.addItem);
exports.default = router;
