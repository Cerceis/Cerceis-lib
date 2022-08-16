"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gacha = void 0;
class Gacha {
    constructor() {
        this.entries = [];
        this.accumulatedWeight = 0.0;
    }
    addEntries(item, weight) {
        this.accumulatedWeight += weight;
        this.entries.push({
            obj: item,
            accumulatedWeight: this.accumulatedWeight
        });
    }
    getRandom() {
        var _a;
        const r = Math.random() * this.accumulatedWeight;
        return (_a = this.entries.find((entry) => {
            return entry.accumulatedWeight >= r;
        })) === null || _a === void 0 ? void 0 : _a.obj;
    }
}
exports.Gacha = Gacha;
