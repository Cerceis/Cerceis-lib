export const Is = {
    object: ( x: any ): boolean => Object.prototype.toString.call(x) === "[object Object]",
    emptyObject: ( x: Object ): boolean =>{
        if(!Is.object(x)) return false;
        for(let i in x) return false;
        return true;
    },
    string:(x: any): boolean => (typeof x === 'string' || x instanceof String),
    emptyString:(x: any) =>{
        if(!Is.string(x)) return false;
        for(let i in x) return false;
        return true;
    },
    number: (x: any): boolean => Object.prototype.toString.call(x) === "[object Number]",
    boolean: ( x: any ): boolean => Object.prototype.toString.call(x) === "[object Boolean]",
    array:(x:any): boolean => Array.isArray(x),
    null:(x: any): boolean => x === null,
    undefined:(x: undefined): boolean => x === undefined,
    falseValue:(x: any): boolean =>{
        let emptyCount: number = 0;
        if(Is.emptyString(x))emptyCount++;
        if(Is.number(x) && x === 0)emptyCount++;
        if(Is.null(x)) emptyCount++;
        if(Is.undefined(x)) emptyCount++;
        if(Is.boolean(x) && x === false) emptyCount++;
        return emptyCount > 0 ? true: false;
    },
    email:(x: string): boolean =>{
        if(!x) return false;
        if(!/.+@.+\..+/.test(x)) return false;
        return true;
    },
    alphanumeric:(x: string): boolean => {
        if(!x) return false;
        const alphanumeric = /^[0-9a-zA-Z]+$/;
        if(!alphanumeric.test(x)) return false;
        return true;
    },
    UUIDv4:(x: string): boolean => {
		if(!x) return false;
        const uuidv4 = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
        if(!uuidv4.test(x)) return false;
        return true;
	},
	sameAs: (x: any, y: any): boolean => {
        if(x === y) return true;
        return false;
	},
    noSpecials:(
        x: string,
        space: boolean = true, //true = allow space
        extendJpn: boolean | null = false
    ): boolean => {
        if(!x) return true;
        let format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if(!space) format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if(extendJpn) format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~｀！＠＃＄％＾＆＊（）_＋ー＝「」『』；’：”＼｜、。＜＞・？〜]/;
        if(!space && extendJpn) format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~　｀！＠＃＄％＾＆＊（）_＋ー＝「」『』；’：”＼｜、。＜＞・？〜]/;
        if(format.test(x)) return false;
        return true;
    },
    aFunction(x: any): boolean {
        return Object.prototype.toString.call(x) == '[object Function]';
    }
}