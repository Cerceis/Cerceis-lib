interface Error{
    errored: any,
    code: string,
    label?: string,
    labelEn?: string,
    labelJpn?: string
}
export type Locale = "eng" | "jpn"

import { localeEng } from "./locale/eng.js"
import { localeJpn } from "./locale/jpn.js"

const errorMsg: any = {
    eng: localeEng,
    jpn: localeJpn
}

export class Validator{
    private locale: Locale = "eng"
    public inputValue: any;
    private currentErrorName: string = "";
    public errorMap: {[key: string]: Error[]} = {}
    private pristineMap: {
        [key: string]: boolean
    } = {}
    private valueMap: {
        [key: string]: any
    } = {}

    public value(inputValue: any): this{
        this.inputValue = inputValue;
        return this
    }

    public setLocale(locale: Locale){
        this.locale = locale;
    }
    /**
     * 
     * @param inputName A name for the value used to group errors in errorMap. must be chained after value()
     * @returns 
     */
    public as(inputName: string): this{
        this.currentErrorName = inputName;
        if(this.pristineMap[inputName] === undefined){
            this.pristineMap[inputName] = true
        }
        else if(
            this.valueMap[inputName] !== this.inputValue   
        ){
            this.pristineMap[inputName] = false
        }
        this.errorMap[inputName] = []
        this.valueMap[inputName] = this.inputValue
        return this
    }

    private _addError(err: Error): void{
        if(this.currentErrorName)
            if(this.errorMap[this.currentErrorName] && !this.pristineMap[this.currentErrorName]){
                this.errorMap[this.currentErrorName].push(err)
            }
            else if(!this.errorMap[this.currentErrorName] && !this.pristineMap[this.currentErrorName]){
                this.errorMap[this.currentErrorName] = [];
                this.errorMap[this.currentErrorName].push(err)
            }

    }

    //Static type checks
    public static isDefined = (x: any) => x !== undefined && x !== null;
    public static isUndefined = (x: any) => x === undefined;
    public static isArray = Array.isArray;
    public static isString = ( x: any ) => (typeof x === 'string' || x instanceof String);
    public static isObject = ( x: {} ) => Object.prototype.toString.call(x) === "[object Object]";
    public static isNumber = ( x: number ) => Object.prototype.toString.call(x) === "[object Number]";
    public static isBoolean = ( x: boolean ) => Object.prototype.toString.call(x) === "[object Boolean]";

    /**
     * 
     * @param min Check minimum, if the input value is a string, 
     * it will check it's length. If it's a number, it will check mathematically. 
     * (This does not check for null | undefined ! Use **required()** to check null values. )
     * @returns {this} this
     */
    public min(min: number): this{
        if(!this.inputValue) return this
        if(Validator.isArray(this.inputValue) || Validator.isString(this.inputValue)){
            if(this.inputValue.length < min)
            this._addError({
                errored: this.inputValue,
                code: "MinReachedS",
                label: errorMsg[this.locale].min(min),
            })
        }else if(Validator.isNumber(this.inputValue)){
            if(this.inputValue < min)
            this._addError({
                errored: this.inputValue,
                code: "MinReachedN",
                label: errorMsg[this.locale].min(min),
            })
        }
        return this
    }
    
    public max(max: number): this{
        if(!this.inputValue) return this
        if(Validator.isArray(this.inputValue) || Validator.isString(this.inputValue)){
            if(this.inputValue.length > max)
            this._addError({
                errored: this.inputValue,
                code: "MaxReachedS",
                label: errorMsg[this.locale].max(max),
            })
        }else if(Validator.isNumber(this.inputValue)){
            if(this.inputValue > max)
            this._addError({
                errored: this.inputValue,
                code: "MaxReachedN",
                label: errorMsg[this.locale].max(max),
            })
        }
        return this
    }

    public isEmail(): this{
        if(!this.inputValue) return this
        if(!/.+@.+\..+/.test(this.inputValue))
            this._addError({
                errored: this.inputValue,
                code: "InvalidEmail",
                label: errorMsg[this.locale].isEmail,
            })
        return this
    }

    public required(): this{
        if(
            this.inputValue === "" ||
            this.inputValue === null ||
            this.inputValue === undefined
        )
            this._addError({
                errored: this.inputValue,
                code: "REQUIRED",
                label: errorMsg[this.locale].required,
            })
        return this
    }

    public alphanumeric(): this{
        if(!this.inputValue) throw "Please provide a value";
        let alphanumeric = /^[0-9a-zA-Z]+$/;
        if(!alphanumeric.test(this.inputValue))
            this._addError({
                errored: this.inputValue,
                code: "ALPHANUM",
                label: errorMsg[this.locale].alphanumeric,
            })
        return this
    }

    public noSpecials(
        space: boolean = true, //true = allow space
        extendJpn: boolean | null = false
    ): this{
        if(!this.inputValue) return this
        var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if(!space) format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if(extendJpn) format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~｀！＠＃＄％＾＆＊（）_＋ー＝「」『』；’：”＼｜、。＜＞・？〜]/;
        if(!space && extendJpn) format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~　｀！＠＃＄％＾＆＊（）_＋ー＝「」『』；’：”＼｜、。＜＞・？〜]/;
        if(format.test(this.inputValue))
            this._addError({
                errored: this.inputValue,
                code: "SPESYMBOL",
                label: errorMsg[this.locale].noSpecials,
            })
        return this
    }
	
	public isUUIDv4(): this{
		if(!this.inputValue) throw "Please provide a value";
        let uuidv4 = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
        if(!uuidv4.test(this.inputValue))
            this._addError({
                errored: this.inputValue,
                code: "INVALID_UUIDV4",
                label: errorMsg[this.locale].isUUIDv4,
            })
        return this
	}

	public isSameAs(value: any): this{
		if(!this.inputValue) throw "Please provide a value";
		if(this.inputValue === value) return this
		this._addError({
			errored: this.inputValue,
			code: "NOT_SAME",
			label: errorMsg[this.locale].isSameAs,
		})
        return this
	}
    public verify(returnErrors: boolean = false): boolean | {[key: string]: Error[]}{
        if(Object.keys(this.errorMap).length > 0) return returnErrors ? this.errorMap : false
        else return true
    }

    public hasError(): boolean{
        let hasError = false
        if(hasError) return true
        for(let field in this.errorMap){
            if(this.errorMap[field].length > 0)
                return true
        }
        return hasError
    }

    public reset(): void{
        this.inputValue = null;
        this.errorMap = {}
        this.currentErrorName = "";
        this.pristineMap = {}
        this.valueMap = {}
    }
    
}
export const validator = new Validator();