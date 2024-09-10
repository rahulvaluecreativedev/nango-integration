"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ConnectionSchema = new mongoose_1.Schema({
    // title:{
    //     type:String
    // },
    connectionId: {
        type: String,
        required: true,
    },
    integrationId: {
        type: String
    },
    // actionId:{
    //     type: Schema.Types.ObjectId,
    //     ref: "Action"
    // },
    // type:{
    //     type:String,
    //     enum:["Action","Trigger"]
    // },
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
