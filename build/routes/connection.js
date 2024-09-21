"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const connection_1 = require("../controller/connection");
router.post("/createConnection", connection_1.addConnection);
exports.default = router;
