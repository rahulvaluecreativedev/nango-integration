"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AppSchema = new mongoose_1.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    slug: {
        type: String,
        unique: true,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)('App', AppSchema);
