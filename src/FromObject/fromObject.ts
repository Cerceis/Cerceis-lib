export const FromObject = {
    _isObj: ( x: Object ): boolean => Object.prototype.toString.call(x) === "[object Object]",
    /**
     * Convert Object into a 2-dimentional array ([[key, value], [key2, value2],...]).
     * @param inputObj Input object.
     * @returns An 2 dimentional array with a type of [[key, value], [key2, value2],...]
     */
    _isNumber: (x: number): boolean => Object.prototype.toString.call(x) === "[object Number]",
    ObjectToArray(inputObj: {[key:string | number]:any}): any[][]{
        return Object.keys(inputObj).map((key)=>{ return [String(key), inputObj[key]] });
    },
    /**
     * Flatten a multi level object.
     * @param obj Object
     * @param overwriteKey Determine if to overwrite duplicated key, default: false.
     * @returns 
     */
    flatten(obj: Object, overwriteKey: boolean = false): object{
        if(Object.keys(obj).length === 0) return {};
        const rs: any = {};
        const genId = (): string => 
            (new Date().getTime() / 1000 | 0).toString(16) + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, () => {
                return (Math.random() * 16 | 0).toString(16);
            }).toLowerCase();
        const interRecursiveFunc = (o: object) => {
            for(let key in o){
                if(this._isObj(o[key as keyof object])){
                    interRecursiveFunc(o[key as keyof object]);
                }else{
                    if(rs.hasOwnProperty(key) && !overwriteKey){
                        rs[genId()] = o[key as keyof object];
                    }else rs[key] = o[key as keyof object];
                }
            }
        }
        interRecursiveFunc(obj);
        return rs;  
    },
    /**
     * Find and return the nested deepest object. If there are 2 result at the same depth, it will
     * return the last occur deepest object.
     * @param obj input Object;
     * @param multi return all result if multiple result is available.
     * @returns Deepest object
     */
    getDeepest(obj: object, multi: boolean = false): object | object[] {
        if(Object.keys(obj).length === 0) return {};
        let deepest = 0;
        let rs: any = {};
        const rsMulti: any = {};
        const interRecursiveFunc = (o: object, depth: number = 0) => {
            depth ++;
            if(depth >= deepest) {
                deepest = depth;
                rs = o;
                if(!rsMulti[depth] && multi) rsMulti[depth] = [];
                if(multi) rsMulti[depth].push(o);
            }
            for(let key in o){
                if(this._isObj(o[key as keyof object])){
                    interRecursiveFunc(o[key as keyof object], depth);
                }
            }
        }
        interRecursiveFunc(obj);
        return multi ? rsMulti[deepest] : rs;
    },
    /**
     * Sum all the value of an object, support up to single nested object
     * return the sum.
     * @param obj input Object;
     * @param field target field if inputs are nested object;
     * @returns Sum
    */
    sumAll(obj: object, field: string = ""){
        let sum = 0;
        for(let prop in obj){
            const t = field !== "" ? obj[prop as keyof object][field] : obj[prop as keyof object]
            if(!this._isNumber(t)) throw `Value of property "${prop}" is not a number.`; 
            sum += t;
        }
        return sum;
    },
    /**
     * Find the max value of an object, support up to single nested object
     * return the max.
     * @param obj input Object;
     * @param field target field if inputs are nested object;
     * @returns Max value.
    */
    max(obj: object, field: string = ""){
        let max = 0;
        for(let prop in obj){
            const t = field !== "" ? obj[prop as keyof object][field] : obj[prop as keyof object]
            if(!this._isNumber(t)) throw `Value of property "${prop}" is not a number.`; 
            if(t > max) max = t;
        }
        return max;
    },
    /**
     * Find the min value of an object, support up to single nested object
     * return the min.
     * @param obj input Object;
     * @param field target field if inputs are nested object;
     * @returns Min value.
    */
    min(obj: object, field: string = ""){
        let min = null;
        for(let prop in obj){
            const t = field !== "" ? obj[prop as keyof object][field] : obj[prop as keyof object]
            if(!this._isNumber(t)) throw `Value of property "${prop}" is not a number.`; 
            if(min === null || t < min) min = t;
        }
        return min;
    }
}
