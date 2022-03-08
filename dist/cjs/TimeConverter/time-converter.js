"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHours = exports.toMinutes = exports.toSeconds = exports.toMs = void 0;
const toMs = (h = 0, m = 0, s = 0, ms = 0) => {
    return (h * 3600000 +
        m * 60000 +
        s * 1000 +
        ms);
};
exports.toMs = toMs;
const toSeconds = (h = 0, m = 0, s = 0, ms = 0) => {
    return (h * 3600 +
        m * 60 +
        s +
        ms / 1000);
};
exports.toSeconds = toSeconds;
const toMinutes = (h = 0, m = 0, s = 0, ms = 0) => {
    return (h * 60 +
        m +
        s / 60 +
        ms / 60000);
};
exports.toMinutes = toMinutes;
const toHours = (h = 0, m = 0, s = 0, ms = 0) => {
    return (h +
        m / 60 +
        s / 3600 +
        ms / 1800000);
};
exports.toHours = toHours;
