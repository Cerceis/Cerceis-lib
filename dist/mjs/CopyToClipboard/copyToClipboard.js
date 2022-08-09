/**
* Copy string to clipboard.
* @param {string} textToCopy Text to copy.
* @returns {void} void
*/
export const CopyToClipboard = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy);
};
