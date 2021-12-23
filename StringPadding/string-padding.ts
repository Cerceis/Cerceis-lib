export type Loc = "prefix" | "suffix"

export const StringPadding = (
    input: string,
    len: number,
    replacer: string, //Only accept single char
    loc: Loc = "prefix"
): string => {
    if(!replacer && replacer.length > 1) throw "replacer needs to be a single char."
    //input string len is longer than desired len, no padding needed.
    if(len - input.length < 0) return input; 
    let result: string = input;
    for(;result.length<len;) 
        result = loc === "suffix" ? 
        `${result}${replacer}`:`${replacer}${result}`
    return result;
}