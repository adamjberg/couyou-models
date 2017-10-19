"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.UserCarSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    car: {
        type: mongoose.Types.ObjectId,
        ref: 'Car',
        required: true
    }
});
exports.UserCar = mongoose.model('UserCar', exports.UserCarSchema);
//# sourceMappingURL=UserCar.js.map