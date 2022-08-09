"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gacha = exports.Prob = void 0;
exports.Prob = {
    roll(percentage) {
        const fixed = percentage / 100;
        if (fixed >= Math.random())
            return true;
        return false;
    },
};
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
/*
var entries = [];
var accumulatedWeight = 0.0;

this.addEntry = function(object, weight) {
    accumulatedWeight += weight;
    entries.push( { object: object, accumulatedWeight: accumulatedWeight });
}

this.getRandom = function() {
    var r = Math.random() * accumulatedWeight;
    return entries.find(function(entry) {
        return entry.accumulatedWeight >= r;
    }).object;
}
*/ 
