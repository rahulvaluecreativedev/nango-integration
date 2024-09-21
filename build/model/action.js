"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const itemchema = new mongoose_1.Schema({
    appId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "App"
    },
    name: {
        type: String
        //  => send a email
    },
    uniqueName: {
        // llld
        type: String
    },
    variables: [
        {
            title: String, // From
            dataType: String, // String
            isRequired: Boolean // false
        }
    ]
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)('Item', itemchema);
