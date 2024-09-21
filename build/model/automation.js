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
            ref: "Item"
        },
        variableValues: {
            type: Object
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
            ref: "Item"
        },
        variableValues: {
            type: Object
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
    ],
    status: {
        type: String,
        enum: ["draft", "stopped", "active", "cancel"]
    },
    schedule: {
        type: Number
    }
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)('Automation', AutomationSchema);
