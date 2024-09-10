"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ActionSchema = new mongoose_1.Schema({
    appId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "App"
    },
    actionName: {
        type: String
    },
    actionUniqueName: {
        type: String
    }
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)('Action', ActionSchema);
