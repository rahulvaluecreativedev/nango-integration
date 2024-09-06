"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AutomationSchema = new mongoose_1.Schema({
    trigger: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Connection"
    },
    triggerValue: {
        type: Object
    },
    action: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Connection"
    },
    actionValue: {
        type: Object
    },
    active: {
        type: Boolean,
        default: false,
    },
    userId: {
        type: Number
    },
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)('Automation', AutomationSchema);
