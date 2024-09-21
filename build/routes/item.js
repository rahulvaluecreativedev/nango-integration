"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const item_1 = require("../controller/item");
router.post("/create", item_1.addItem);
exports.default = router;
