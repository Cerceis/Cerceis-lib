import { AlphabateOptions } from "./types";
/**
 * Generator that generates all kinds of values.
 * alphanum
 * objectId
 * int
 * array
 */

export const Generate = {
    /**
     * Generates a string consist of alphanumeric characters of given length
     * @param {number}[len=4] Length of the string 
     * @returns Alphanumeric string
     */
    alphanum(len: number = 4): string{
        const chars: string ='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        if(len === 1) return chars[Math.floor(Math.random() * chars.length)];
        let result = '';
        for (let i = len; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    },
     /**
     * Generates random integer in a given range of (].
     * @returns 
     */
    objectId (): string{
        const timestamp: string = (new Date().getTime() / 1000 | 0).toString(16);
        return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, () => {
            return (Math.random() * 16 | 0).toString(16);
        }).toLowerCase();
    },
    /**
     * Generates random integer in a given range of [).
     * Includes Min, exclude Max.
     * @param min 
     * @param max 
     * @returns number
     */
    int(min: number, max: number): number{
        let result: number = 0;
        result = Math.floor(Math.random() * (max - min))+ min
        return result
    },
    /**
     *  Generates an array with random number as elemnt of desired length.
     *  @param len @required Length of the array.
     *  @returns Array of a given length
     */
    array(len: number){
        const rs: number[] = [];
        for(let i = 0; i< len ; i++)
            rs.push(this.int(0, 1000))
        return rs
    },
    /**
     * Generates random alphabate of specified length.
     * @param {number} [len=5] Length of the string. default = 5,
     * @param {AlphabateOptions} [options] Options
     */
    alphabate(
        len: number = 5,
        options: AlphabateOptions = {}
    ): string{
        const op: AlphabateOptions = {
            lowercase: true,
            uppercase: true
        }
        Object.assign(op, options);
        let result = '';
        const lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
        const upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let characterPool = "";
        if(op.lowercase) characterPool += lowerCaseCharacters;
        if(op.uppercase) characterPool += upperCaseCharacters;
        const charactersLength = characterPool.length;
        for (let i = 0; i<len; i++){
            result += characterPool.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}

