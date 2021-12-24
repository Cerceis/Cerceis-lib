export const toMs = (h = 0, m = 0, s = 0, ms = 0) => {
    return (h * 3600000 +
        m * 60000 +
        s * 1000 +
        ms);
};
export const toSeconds = (h = 0, m = 0, s = 0, ms = 0) => {
    return (h * 3600 +
        m * 60 +
        s +
        ms / 1000);
};
export const toMinutes = (h = 0, m = 0, s = 0, ms = 0) => {
    return (h * 60 +
        m +
        s / 60 +
        ms / 60000);
};
export const toHours = (h = 0, m = 0, s = 0, ms = 0) => {
    return (h +
        m / 60 +
        s / 3600 +
        ms / 1800000);
};
//# sourceMappingURL=time-converter.js.map