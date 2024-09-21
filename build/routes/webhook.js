"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const webhook_1 = require("../controller/webhook");
router.post("/", webhook_1.webhook);
exports.default = router;
