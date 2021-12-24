/**
 * Find and return the largest n numbers
 * @param numbers Array of numbers.
 * @param n Number of results to return.
 * @param returnIndex Return the index instead of the value.
 * @returns Array of largest n number.
 */
export const GetLargest = (numbers, n = 1, returnIndex = false) => {
    //Usually sort is not good at this, but in this situation it's better to use sort.
    const results = [];
    if (returnIndex) {
        let sortedNumbers = [];
        sortedNumbers = numbers.map((n, i) => {
            return { data: n, index: i };
        });
        sortedNumbers = sortedNumbers.sort((a, b) => b.data - a.data);
        for (let i = 0; i < sortedNumbers.length; i++)
            if (i < n)
                results.push(sortedNumbers[i].index);
    }
    else {
        const sortedNumbers = numbers.sort((a, b) => b - a);
        for (let i = 0; i < sortedNumbers.length; i++)
            if (i < n)
                results.push(sortedNumbers[i]);
    }
    return results;
};
//# sourceMappingURL=get-largest.js.map