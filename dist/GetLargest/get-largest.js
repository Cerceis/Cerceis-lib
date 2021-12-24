//Returns the largest N numbers
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