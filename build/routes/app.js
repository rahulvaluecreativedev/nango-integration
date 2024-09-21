"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const apps_1 = require("../controller/apps");
router.post("/", apps_1.addApp);
exports.default = router;
