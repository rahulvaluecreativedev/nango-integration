"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AutomationSchema = new mongoose_1.Schema({
    name: {
        type: String
    },
    trigger: {
        connectionId: {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Connection"
        },
        title: {
            type: String
        },
        actionId: {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Action"
        },
        actionParams: {
            type: Object
        },
        type: {
            type: String,
            enum: ["Action", "Trigger"]
        },
    },
    Actions: {
        connectionId: {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Connection"
        },
        title: {
            type: String
        },
        actionId: {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Action"
        },
        actionParams: {
            type: Object
        },
        type: {
            type: String,
            enum: ["Action", "Trigger"]
        },
    },
    isActive: {
        type: Boolean,
        default: false,
    },
    isStopped: {
        type: Boolean,
        default: false,
    },
    userId: {
        type: Number
    },
    appIds: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "App"
        }
    ]
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)('Automation', AutomationSchema);
