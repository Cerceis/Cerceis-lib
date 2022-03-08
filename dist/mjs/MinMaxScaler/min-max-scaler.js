export const MinMaxScaler = (x, min, max) => {
    return (x - min) / (max - min);
};
