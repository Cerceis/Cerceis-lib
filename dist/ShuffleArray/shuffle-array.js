/**
 * Randomly shuffle an Array. Based on anwser by https://stackoverflow.com/questions/2450954/
 * @param arr Array to shuffle.
 * @returns Shuffled array.
 */
export const ShuffleArray = (arr) => {
    let currentIndex = arr.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }
    return arr;
};
//# sourceMappingURL=shuffle-array.js.map