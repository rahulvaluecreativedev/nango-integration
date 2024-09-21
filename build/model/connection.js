"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ConnectionSchema = new mongoose_1.Schema({
    connectionId: {
        type: String,
        required: true,
    },
    integrationId: {
        type: String
    },
    appId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "App"
    },
    userId: {
        type: Number
    },
    active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)('Connection', ConnectionSchema);
