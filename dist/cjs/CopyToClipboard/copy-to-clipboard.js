"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopyToClipboard = void 0;
/**
* Copy string to clipboard.
* @param {string} textToCopy Text to copy.
* @returns {void} void
*/
const CopyToClipboard = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy);
};
exports.CopyToClipboard = CopyToClipboard;
