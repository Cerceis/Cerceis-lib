export const GetRandomElement = (arr, noOfResult = 1) => {
    if (!Array.isArray(arr))
        throw "Input must be an array";
    const result = [];
    for (let i = 0; i < noOfResult; i++)
        result.push(arr[Math.floor(Math.random() * arr.length)]);
    return result;
};
//# sourceMappingURL=get-random-element.js.map