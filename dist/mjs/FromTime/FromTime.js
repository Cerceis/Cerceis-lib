const toMs = (h = 0, m = 0, s = 0, ms = 0) => {
    return (h * 3600000 + m * 60000 + s * 1000 + ms);
};
const toSeconds = (h = 0, m = 0, s = 0, ms = 0) => {
    return (h * 3600 + m * 60 + s + ms / 1000);
};
const toMinutes = (h = 0, m = 0, s = 0, ms = 0) => {
    return (h * 60 +
        m +
        s / 60 +
        ms / 60000);
};
const toHours = (h = 0, m = 0, s = 0, ms = 0) => {
    return (h +
        m / 60 +
        s / 3600 +
        ms / 1800000);
};
export const isDateObject = (d) => Object.prototype.toString.call(d) === "[object Date]";
export const FromTime = {
    jpnDayMap: {
        0: "日",
        1: "月",
        2: "火",
        3: "水",
        4: "木",
        5: "金",
        6: "土",
    },
    toMs, toSeconds, toMinutes, toHours,
    /**
     * Format date object into "YYYY-MM-DD HH:mm:ss" aka the best format.
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
        if (!currentDate)
            return input;
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
    },
};
export class cDate {
    constructor(date) {
        if (isDateObject(date))
            this._date = FromTime.format(date, { asObject: true });
        else
            this._date = FromTime.format(new Date(date), { asObject: true });
    }
    // AddData
    addMonth(n) {
        var _a;
        const _d = new Date();
        _d.setHours((_a = this._date.h) !== null && _a !== void 0 ? _a : 0, this._date.m, this._date.s);
        console.log(this.dateTime);
        console.log(_d);
        _d.setMonth(_d.getMonth() + n);
        this._date = FromTime.format(_d, { asObject: true });
    }
    get dateTime() {
        return `${this._date.Y}-${String(this._date.M).padStart(2, '0')}-${String(this._date.D).padStart(2, '0')} ${String(this._date.h).padStart(2, '0')}:${String(this._date.m).padStart(2, '0')}:${String(this._date.s).padStart(2, '0')}`;
    }
    get date() { return `${this._date.Y}-${String(this._date.M).padStart(2, '0')}-${String(this._date.D).padStart(2, '0')}`; }
    get time() { return `${String(this._date.h).padStart(2, '0')}:${String(this._date.m).padStart(2, '0')}:${String(this._date.s).padStart(2, '0')}`; }
}
