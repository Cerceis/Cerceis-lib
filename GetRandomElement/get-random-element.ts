export const getRandomFromArray = (arr, noOfResult)=>{
    if(!Array.isArray(arr)) throw "Input must be an array"
    const result = []
    for(let i = 0 ; i<noOfResult ; i++)
        result.push(arr[Math.floor(Math.random() * arr.length)]);
    return result
}