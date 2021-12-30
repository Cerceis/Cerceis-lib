/**
 *  Generates an array with different types (number, object, string) of desired length.
 *  @param len @required Length of the array.
 */
import { RandomInt } from "../RandomInt/random-int.js";
export const GenerateArray = (len) => {
    const rs = [];
    for (let i = 0; i < len; i++)
        rs.push(RandomInt(0, 1000));
    return rs;
};
//# sourceMappingURL=generate-array.js.map