export const FromArray = {
    /**
     * Returns a/multiple random element in an array.
     * @param arr Array of input numbers.
     * @param {number} [noOfResult=1] Number of results to return.
     * @returns 
     */
    getRandom(arr: any[], noOfResult: number = 1): any[]{
        if (!Array.isArray(arr)) throw "Input must be an array"
        const result = []
        for (let i = 0; i < noOfResult; i++)
            result.push(arr[Math.floor(Math.random() * arr.length)]);
        return result
    },
    /**
     * Find and return the largest n numbers
     * @param numbers Array of numbers.
     * @param {number} [n] Number of results to return.
     * @param {boolean} [returnIndex] Return the index instead of the value.
     * @returns Array of largest n number.
     */
    getLargest(numbers: number[], n: number = 1, returnIndex: boolean = false): number[]{
        //Usually sort is not good at this, but in this situation it's better to use sort.
        const results: number[] = [];
        if(returnIndex){
            let sortedNumbers: {data:number, index:number}[] = [];
            sortedNumbers = numbers.map((n, i) => {
                return { data:n, index:i }
            })
            sortedNumbers = sortedNumbers.sort((a,b)=> b.data-a.data);
            for(let i = 0; i<sortedNumbers.length ; i++)
                if(i < n) results.push(sortedNumbers[i].index)
        }else{
            const sortedNumbers = numbers.sort((a,b)=> b-a);
            for(let i = 0; i<sortedNumbers.length ; i++)
                if(i < n) results.push(sortedNumbers[i])
        }
        return results
    },
    /**
     * Find and return the smallest n numbers
     * @param numbers Array of numbers.
     * @param {number} [n=1] Number of results to return.
     * @param {boolean} [returnIndex=false] Return the index instead of the value.
     * @returns Array of smallest n number.
     */
    getSmallest(numbers: number[], n: number = 1, returnIndex: boolean = false): number[]{
        //Usually sort is not good at this, but in this situation it's better to use sort.
        const results: number[] = [];
        if(returnIndex){
            let sortedNumbers: {data:number, index:number}[] = [];
            sortedNumbers = numbers.map((n, i) => {
                return { data:n, index:i }
            })
            sortedNumbers = sortedNumbers.sort((a,b)=> a.data-b.data);
            for(let i = 0; i<sortedNumbers.length ; i++)
                if(i < n) results.push(sortedNumbers[i].index)
        }else{
            const sortedNumbers = numbers.sort((a,b)=> a-b);
            for(let i = 0; i<sortedNumbers.length ; i++)
                if(i < n) results.push(sortedNumbers[i])
        }
        return results
    },
    /**
     * Return intersection of two arrays.
     * @param arrA Array A to find intersection.
     * @param arrB Array B to find intersection.
     * @param duplicated Return duplicated results.
     * @returns any[]
     */
    getIntersect(
        arrA: any[], 
        arrB: any[], 
        duplicated: boolean = false 
    ): any[]{
        const _map: {[key: string]: number} = {};
        const result: any[] = [];
        for(let i = 0; i<arrA.length; i++)
            _map[arrA[i]] = 1
        for(let i = 0; i<arrB.length; i++)
            if(!duplicated){
                if(_map[arrB[i]] && _map[arrB[i]] === 1){
                    result.push(arrB[i])
                    _map[arrB[i]] ++;
                }
            }
            else if(_map[arrB[i]]) result.push(arrB[i])
        return result;
    },
    /**
     * Randomly shuffle an Array. Based on anwser by https://stackoverflow.com/questions/2450954/
     * @param arr Array to shuffle.
     * @returns Shuffled array.
     */
    shuffle(arr: any[]):any[]{
        let currentIndex = arr.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
        }
        return arr;
    },
    /**
     * The thanos snap, remove half of the elements randomly
     * length - 1 if total length is an odd number.
     * Mutates the original array. You can never go back.
     * @param arr Input Array
     */
    thanosSnap(arr: any[]):any[]{
        const targetLen: number = arr.length % 2 === 0 ? arr.length/2 : (arr.length - 1) / 2;
        while(arr.length !== targetLen)
            arr.splice(Math.floor(Math.random() * arr.length), 1);
        return arr
    },
    /**
     * Convert a 2-dimentional array ([[key, value], [key2, value2],...]) into Object.
     * @param arr Input 2-dimentional array [[key, value], [key2, value2],...]
     * @returns Object
     */
    toObject(arr: any[][]):{ [key: string | number]: any }{
        let tmpObj: { [key: string | number]: any } = {}
        arr.forEach(e => tmpObj[e[0]] = e[1])
        return tmpObj
    }
}
