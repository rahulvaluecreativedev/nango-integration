"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const automation_1 = require("../controller/automation");
router.post("/create", automation_1.createAutomation);
router.get("/list", automation_1.getAutomation);
exports.default = router;
