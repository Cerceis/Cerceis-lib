const Colors = {
    "Red": 31,
    "Green": 32,
    "Yellow": 33,
    "Blue": 34,
    "Magenta": 35,
    "Cyan": 36,
    "White": 37,
};
export const Logger = {
    disabled: false,
    log(msg, color = "White") {
        if (this.disabled)
            return;
        console.log(`%s\x1b[${Colors[color]}m%s\x1b[0m`, `[LOG] - ${(new Date).toLocaleString()}    `, msg);
    },
    error(msg) {
        if (this.disabled)
            return;
        console.log(`%s\x1b[31m%s\x1b[0m`, `[LOG] - ${(new Date).toLocaleString()}    `, msg);
    },
    warn(msg) {
        if (this.disabled)
            return;
        console.log(`%s\x1b[33m%s\x1b[0m`, `[LOG] - ${(new Date).toLocaleString()}    `, msg);
    },
    succ(msg) {
        if (this.disabled)
            return;
        console.log(`%s\x1b[32m%s\x1b[0m`, `[LOG] - ${(new Date).toLocaleString()}    `, msg);
    }
};
