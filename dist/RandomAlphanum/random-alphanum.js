export const RandomAlphanum = (len = 4) => {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = len; i > 0; --i)
        result += chars[Math.floor(Math.random() * chars.length)];
    return result;
};
//# sourceMappingURL=random-alphanum.js.map