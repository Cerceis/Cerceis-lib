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
    },
    /**
     * @returns Current Date Time with a format of "YYYY-MM-DD""
     */
    currentDate(): string{
        const t: Date = new Date();
        return `${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`;
    },
    /**
     * @returns Current Date Time with a format of "HH:mm:ss""
     */
    currentTime(): string{
        const t: Date = new Date();
        return `${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}:${String(t.getSeconds()).padStart(2,"0")}`;
    },
    /**
     * @returns Current Date Time with a format of "YYYY-MM-DD HH:mm:ss""
     */
    currentDateTime(): string{
        const t: Date = new Date();
        return `${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()} ${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}:${String(t.getSeconds()).padStart(2,"0")}`;
    },
    /**
     * Generates and return list of date of specified day.
     * Ex: All Sunday and Monday of 2022-01-01 to 2022-03-01
     * @param f  From : YYYY-MM-DD
     * @param t  To : YYYY-MM-DD
     * @param days  number[] 0 ~ 6 Sunday ~ Saturday.
     */
    listOfDateOfDays(f: string, t: string, days: number[]){
        let fromDate = new Date(f);
        const toData = new Date(t);
        let fromISO = fromDate.toISOString();
        const toISO = toData.toISOString();
        const rs: string[] = [];
        while(true){
            if(fromISO > toISO) break;
            if(days.includes(fromDate.getDay()))
                rs.push(fromISO.slice(0,10))
            fromDate.setDate(fromDate.getDate()+1);
            fromISO = fromDate.toISOString();
        }
        return rs;
    }
}

