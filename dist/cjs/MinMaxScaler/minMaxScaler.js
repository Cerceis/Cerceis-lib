"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unMinMaxScaler = exports.MinMaxScaler = void 0;
const MinMaxScaler = (x, min, max) => {
    return (x - min) / (max - min);
};
exports.MinMaxScaler = MinMaxScaler;
const unMinMaxScaler = (x, min, max) => {
    return (x * (max - min)) + min;
};
exports.unMinMaxScaler = unMinMaxScaler;
