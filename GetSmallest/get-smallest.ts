//Returns the largest N numbers
export const GetSmallest = (numbers: number[], n: number = 1, returnIndex: boolean = false): number[] => {
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
}