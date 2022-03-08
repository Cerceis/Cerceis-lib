"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delay = void 0;
/**
 * An async delay. Ex) await delay(1000);
 * @param ms Delay duration in milisecond
 */
const Delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};
exports.Delay = Delay;
