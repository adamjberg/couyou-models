"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.OrganizationCarSchema = new mongoose.Schema({
    organization: {
        type: mongoose.Types.ObjectId,
        ref: 'Organization',
        required: true,
    },
    car: {
        type: mongoose.Types.ObjectId,
        ref: 'Car',
        required: true
    }
});
exports.OrganizationCar = mongoose.model('OrganizationCar', exports.OrganizationCarSchema);
//# sourceMappingURL=OrganizationCar.js.map