"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FromTime = void 0;
exports.FromTime = {
    _isDateObject: (d) => Object.prototype.toString.call(d) === "[object Date]",
    jpnDayMap: {
        0: "日",
        1: "月",
        2: "火",
        3: "水",
        4: "木",
        5: "金",
        6: "土",
    },
    /**
     * Format date object into "YYYY-MM-DD HH:mm:ss"
     * @param date Date object
     * @param time
     * @returns formatted string.
     */
    format(date, options = {}) {
        const defaultOptions = { time: true, asObject: false };
        options = Object.assign(Object.assign({}, defaultOptions), options);
        const iso = date.toISOString();
        if (options.time) {
            if (options.asObject)
                return {
                    Y: Number(iso.slice(0, 4)),
                    M: Number(iso.slice(5, 7)),
                    D: Number(iso.slice(8, 10)),
                    h: Number(iso.slice(11, 13)),
                    m: Number(iso.slice(14, 16)),
                    s: Number(iso.slice(17, 19))
                };
            return `${iso.slice(0, 10)} ${iso.slice(11, 19)}`;
        }
        if (options.asObject)
            return {
                Y: Number(iso.slice(0, 4)),
                M: Number(iso.slice(5, 7)),
                D: Number(iso.slice(8, 10)),
            };
        return iso.slice(0, 10);
    },
    toMs(h = 0, m = 0, s = 0, ms = 0) {
        return (h * 3600000 + m * 60000 + s * 1000 + ms);
    },
    toSeconds(h = 0, m = 0, s = 0, ms = 0) {
        return (h * 3600 + m * 60 + s + ms / 1000);
    },
    toMinutes(h = 0, m = 0, s = 0, ms = 0) {
        return (h * 60 +
            m +
            s / 60 +
            ms / 60000);
    },
    toHours(h = 0, m = 0, s = 0, ms = 0) {
        return (h +
            m / 60 +
            s / 3600 +
            ms / 1800000);
    },
    /**
     * Convert to readable x shotest possible date length.
     * Year > Month > Day > Same day > time only.
     * currently support jpn only
     * @params input The input date string
     * @locale language, default = jpn
    */
    toDateTimeShortLocale(input, locale = "jpn") {
        const date = new Date(input);
        const currentDate = new Date();
        if (currentDate.getFullYear() !== date.getFullYear()) {
            return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
        }
        if (currentDate.getMonth() !== date.getMonth()) {
            switch (locale) {
                case "jpn":
                    return `${date.getMonth() + 1}月${date.getDate()}日`;
            }
        }
        if (currentDate.getDate() !== date.getDate()) {
            switch (locale) {
                case "jpn":
                    return `${date.getDate()}日${this.jpnDayMap[date.getDay()]}`;
            }
        }
        switch (locale) {
            case "jpn":
                return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
            default: return "";
        }
    }
};
