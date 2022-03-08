"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prob = void 0;
exports.Prob = {
    roll(percentage) {
        const fixed = percentage / 100;
        if (fixed >= Math.random())
            return true;
        return false;
    },
};
