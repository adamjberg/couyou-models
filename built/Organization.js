"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.OrganizationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
});
exports.Organization = mongoose.model('Organization', exports.OrganizationSchema);
//# sourceMappingURL=Organization.js.map