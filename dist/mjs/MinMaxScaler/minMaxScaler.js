export const MinMaxScaler = (x, min, max) => {
    return (x - min) / (max - min);
};
export const unMinMaxScaler = (x, min, max) => {
    return (x * (max - min)) + min;
};
