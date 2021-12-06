interface Error{
    errored: any,
    code: string,
    labelEn: string,
    labelJpn: string
}

export class Validator{
    public inputValue: any;
    public errors: Error[]= [];

    public value(inputValue: any): this{
        this.inputValue = inputValue;
        return this
    }

    //Static type checks
    public static isDefined = (x: any) => x !== undefined && x !== null;
    public static isUndefined = (x: any) => x === undefined;
    public static isArray = Array.isArray;
    public static isString = ( x: any ) => (typeof x === 'string' || x instanceof String);
    public static isObject = ( x: {} ) => Object.prototype.toString.call(x) === "[object Object]";
    public static isNumber = ( x: number ) => Object.prototype.toString.call(x) === "[object Number]";
    public static isBoolean = ( x: boolean ) => Object.prototype.toString.call(x) === "[object Boolean]";

    public verifyType(inputValue: any): string{
        if(!this.inputValue) throw "Please provide a value"
        let type = typeof inputValue
        return type
    }

    public min(min: number): this{
        if(!this.inputValue) return this
        if(Validator.isArray(this.inputValue) || Validator.isString(this.inputValue)){
            if(this.inputValue.length < min)
            this.errors.push({
                errored: this.inputValue,
                code: "MinReachedS",
                labelEn: `Min ${min}`,
                labelJpn: `最小 ${min}`
            })
        }else if(Validator.isNumber(this.inputValue)){
            if(this.inputValue < min)
            this.errors.push({
                errored: this.inputValue,
                code: "MinReachedN",
                labelEn: `Min ${min}`,
                labelJpn: `最小 ${min}`
            })
        }
        
        return this
    }
    
    public max(max: number): this{
        if(!this.inputValue) return this
        if(Validator.isArray(this.inputValue) || Validator.isString(this.inputValue)){
            if(this.inputValue.length > max)
            this.errors.push({
                errored: this.inputValue,
                code: "MaxReachedS",
                labelEn: `Max ${max}`, 
                labelJpn: `最大 ${max}`
            })
        }else if(Validator.isNumber(this.inputValue)){
            if(this.inputValue > max)
            this.errors.push({
                errored: this.inputValue,
                code: "MaxReachedN",
                labelEn: `Max ${max}`,
                labelJpn: `最大 ${max}`
            })
        }
        return this
    }

    public isEmail(): this{
        if(!this.inputValue) return this
        if(!/.+@.+\..+/.test(this.inputValue))
            this.errors.push({
                errored: this.inputValue,
                code: "InvalidEmail",
                labelEn: "Invalid Email",
                labelJpn: "無効なメールです"
            })
        return this
    }

    public required(): this{
        if(
            this.inputValue === "" ||
            this.inputValue === null ||
            this.inputValue === undefined
        )
            this.errors.push({
                errored: this.inputValue,
                code: "REQUIRED",
                labelEn: "Required",
                labelJpn: "必要項目です"
            })
        return this
    }

    public alphanumeric(): this{
        if(!this.inputValue) throw "Please provide a value";
        let alphanumeric = /^[0-9a-zA-Z]+$/;
        if(!alphanumeric.test(this.inputValue))
            this.errors.push({
                errored: this.inputValue,
                code: "ALPHANUM",
                labelEn: "Value needs to be alphanumeric ( 0~9, a~Z )",
                labelJpn: "半角英文字・数字を入れてください ( 0~9, a~Z )"
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
            this.errors.push({
                errored: this.inputValue,
                code: "SPESYMBOL",
                labelEn: "Must not contain special symbols (!@$%...etc)",
                labelJpn: "特殊記号は使えません (!@$%...など)"
            })
        return this
    }
	
	//
	public isUUIDv4(): this{
		if(!this.inputValue) throw "Please provide a value";
        let uuidv4 = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
        if(!uuidv4.test(this.inputValue))
            this.errors.push({
                errored: this.inputValue,
                code: "INVALID_UUIDV4",
                labelEn: "Value needs to be an v4 UUID",
                labelJpn: "無効なUUIDv4"
            })
        return this
	}

	public isSameAs(value: any): this{
		if(!this.inputValue) throw "Please provide a value";
		if(this.inputValue === value) return this
		this.errors.push({
			errored: this.inputValue,
			code: "NOT_SAME",
			labelEn: "Value not same",
			labelJpn: "再確認できませんでした"
		})
	}
    
    public valid(returnErrors: boolean = false): boolean | Error[]{
        if(this.errors.length > 0) return returnErrors ? this.errors : false
        else return true
    }
}