export const FromString = {
    /**
        * Copy string to clipboard. This only works on browsers.
        * Does not work in nodeJS.
        * @param {string} textToCopy Text to copy.
        * @returns {void} void
    */
    copyToClipboard(textToCopy) {
        if (!navigator)
            return;
        navigator.clipboard.writeText(textToCopy);
    },
    /**
     * Replace first N number of letter with desired string.
     * Does not mutate, return new string.
     * @param n First N number (starts from 1)
     * @param w Strings to replace with
     * @param str Input string
     * @returns new String
     */
    replaceFirst(n, w, str) {
        try {
            if (n != w.length)
                throw "Length of targeted slot and word is not equal.";
            return `${w}${str.slice(n, str.length - 1)}`;
        }
        catch (err) {
            console.log(`FromString.replaceFirst: ${err}`);
            return "";
        }
    },
    /**
     * Replace last N number of letter with desired string.
     * Does not mutate, return new string.
     * @param n Last N number (starts from 1)
     * @param w Strings to replace with
     * @param str Input string
     * @returns new String
     */
    replaceLast(n, w, str) {
        try {
            if (n != w.length)
                throw "Length of targeted slot and word is not equal.";
            return `${str.slice(0, str.length - 1 - n)}${w}`;
        }
        catch (err) {
            console.log(`FromString.replaceLast: ${err}`);
            return "";
        }
    },
    /**
     * Takes http cookie string as input and turn it into an object.
     * @param cookie
     * @returns
     */
    parseCookies(cookie) {
        let list = {};
        let rc = cookie;
        rc && rc.split(';').forEach((cookie) => {
            let parts = cookie.split('=');
            let cookieKey = parts === null || parts === void 0 ? void 0 : parts.shift();
            if (cookieKey)
                list[cookieKey.trim()] = decodeURI(parts.join('='));
        });
        return list;
    },
    /**
     * Removes all whitespace, symbols, specials,
     * leaving only string of 0~9 and a~Z.
     * @param str Input string
     * @returns cleaned String
     */
    deepClean(str) {
        const cleanedStr = str.trim();
        const reg = new RegExp("[^0-9a-zA-Z]", "g");
        return cleanedStr.replace(reg, "");
    },
    /**
     *
     * @param str input string.
     * @param wordToCount word to count.
     * @param isolated Only count if its isolated
     * ex) count "apple", "i like apple" = true, "ilikeapple" = false.
     * @returns number of occurence.
     */
    count(str, wordToCount, isolated = false) {
        if (isolated)
            return str.split(` ${wordToCount} `).length - 1;
        return str.split(wordToCount).length - 1;
    }
};
