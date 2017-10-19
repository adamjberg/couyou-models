"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.EventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    }
});
exports.Event = mongoose.model('Event', exports.EventSchema);
//# sourceMappingURL=Event.js.map