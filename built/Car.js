"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.CarSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
});
exports.Car = mongoose.model('Car', exports.CarSchema);
//# sourceMappingURL=Car.js.map