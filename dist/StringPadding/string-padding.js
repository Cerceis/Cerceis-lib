export const StringPadding = (input, len, replacer, //Only accept single char
loc = "prefix") => {
    if (!replacer && replacer.length > 1)
        throw "replacer needs to be a single char.";
    //input string len is longer than desired len, no padding needed.
    if (len - input.length < 0)
        return input;
    let result = input;
    for (; result.length < len;)
        result = loc === "suffix" ?
            `${result}${replacer}` : `${replacer}${result}`;
    return result;
};
//# sourceMappingURL=string-padding.js.map