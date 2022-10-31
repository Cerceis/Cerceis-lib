"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Generate = void 0;
exports.Generate = {
    /**
     * Generates a string consist of alphanumeric characters of given length
     * @param {number}[len=4] Length of the string
     * @returns Alphanumeric string
     */
    alphanum(len = 4) {
        const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (len === 1)
            return chars[Math.floor(Math.random() * chars.length)];
        let result = '';
        for (let i = len; i > 0; --i)
            result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    },
    /**
    * Generates Object Id.
    * @returns
    */
    objectId() {
        const timestamp = (new Date().getTime() / 1000 | 0).toString(16);
        return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, () => {
            return (Math.random() * 16 | 0).toString(16);
        }).toLowerCase();
    },
    /**
     * Generates random integer in a given range of [).
     * Includes Min, exclude Max.
     * @param min
     * @param max
     * @returns number
     */
    int(min, max) {
        let result = 0;
        result = Math.floor(Math.random() * (max - min)) + min;
        return result;
    },
    /**
     *  Generates an array with random integer as elemnt of desired length.
     *  @param len @required Length of the array.
     *  @returns Array of a given length
     */
    array(len, ops = {}) {
        var _a, _b;
        const defaultOps = {
            min: 0,
            max: 11,
        };
        const mergedOps = Object.assign(Object.assign({}, defaultOps), ops);
        const rs = [];
        for (let i = 0; i < len; i++)
            rs.push(this.int((_a = mergedOps.min) !== null && _a !== void 0 ? _a : 0, (_b = mergedOps.max) !== null && _b !== void 0 ? _b : 11));
        return rs;
    },
    /**
     * Generates random alphabate of specified length.
     * @param {number} [len=5] Length of the string. default = 5,
     * @param {AlphabateOptions} [options] Options
     */
    alphabate(len = 5, options = {}) {
        const op = {
            lowercase: true,
            uppercase: true
        };
        Object.assign(op, options);
        let result = '';
        const lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
        const upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let characterPool = "";
        if (op.lowercase)
            characterPool += lowerCaseCharacters;
        if (op.uppercase)
            characterPool += upperCaseCharacters;
        const charactersLength = characterPool.length;
        for (let i = 0; i < len; i++) {
            result += characterPool.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    },
    /**
     * @returns Current Date Time with a format of "YYYY-MM-DD""
     */
    currentDate() {
        const t = new Date();
        return `${t.getFullYear()}-${t.getMonth() + 1}-${t.getDate()}`;
    },
    /**
     * @returns Current Date Time with a format of "HH:mm:ss""
     */
    currentTime() {
        const t = new Date();
        return `${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}:${String(t.getSeconds()).padStart(2, "0")}`;
    },
    /**
     * @returns Current Date Time with a format of "YYYY-MM-DD HH:mm:ss""
     */
    currentDateTime() {
        const t = new Date();
        return `${t.getFullYear()}-${t.getMonth() + 1}-${t.getDate()} ${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}:${String(t.getSeconds()).padStart(2, "0")}`;
    },
    /**
     * Generates and return list of date of specified day.
     * Ex: All Sunday and Monday of 2022-01-01 to 2022-03-01
     * @param f  From : YYYY-MM-DD
     * @param t  To : YYYY-MM-DD
     * @param days  number[] 0 ~ 6 Sunday ~ Saturday.
     */
    listOfDateOfDays(f, t, days) {
        let fromDate = new Date(f);
        const toData = new Date(t);
        let fromISO = fromDate.toISOString();
        const toISO = toData.toISOString();
        const rs = [];
        while (true) {
            if (fromISO > toISO)
                break;
            if (days.includes(fromDate.getDay()))
                rs.push(fromISO.slice(0, 10));
            fromDate.setDate(fromDate.getDate() + 1);
            fromISO = fromDate.toISOString();
        }
        return rs;
    }
};
