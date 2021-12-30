/**
 * Return intersection of two arrays.
 * @param arrA Array A to find intersection.
 * @param arrB Array B to find intersection.
 * @param duplicated Return duplicated results.
 * @returns any[]
 */
export const Intersect = (arrA, arrB, duplicated = false) => {
    const _map = {};
    const result = [];
    for (let i = 0; i < arrA.length; i++)
        _map[arrA[i]] = 1;
    for (let i = 0; i < arrB.length; i++)
        if (!duplicated) {
            if (_map[arrB[i]] && _map[arrB[i]] === 1) {
                result.push(arrB[i]);
                _map[arrB[i]]++;
            }
        }
        else if (_map[arrB[i]])
            result.push(arrB[i]);
    return result;
};
//# sourceMappingURL=intersect.js.map