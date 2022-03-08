"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinMaxScaler = void 0;
const MinMaxScaler = (x, min, max) => {
    return (x - min) / (max - min);
};
exports.MinMaxScaler = MinMaxScaler;
