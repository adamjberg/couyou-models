"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.OrganizationEventSchema = new mongoose.Schema({
    organization: {
        type: mongoose.Types.ObjectId,
        ref: 'Organization',
        required: true,
    },
    event: {
        type: mongoose.Types.ObjectId,
        ref: 'Event',
        required: true
    }
});
exports.OrganizationEvent = mongoose.model('OrganizationEvent', exports.OrganizationEventSchema);
//# sourceMappingURL=OrganizationEvent.js.map