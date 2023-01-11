export const Is = {
    object: (x) => Object.prototype.toString.call(x) === "[object Object]",
    emptyObject: (x) => {
        if (!Is.object(x))
            return false;
        for (let i in x)
            return false;
        return true;
    },
    string: (x) => (typeof x === 'string' || x instanceof String),
    emptyString: (x) => {
        if (!Is.string(x))
            return false;
        for (let i in x)
            return false;
        return true;
    },
    number: (x) => Object.prototype.toString.call(x) === "[object Number]",
    boolean: (x) => Object.prototype.toString.call(x) === "[object Boolean]",
    array: (x) => Array.isArray(x),
    null: (x) => x === null,
    undefined: (x) => x === undefined,
    falseValue: (x) => {
        let emptyCount = 0;
        if (Is.emptyString(x))
            emptyCount++;
        if (Is.number(x) && x === 0)
            emptyCount++;
        if (Is.null(x))
            emptyCount++;
        if (Is.undefined(x))
            emptyCount++;
        if (Is.boolean(x) && x === false)
            emptyCount++;
        return emptyCount > 0 ? true : false;
    },
    email: (x) => {
        if (!x)
            return false;
        if (!/.+@.+\..+/.test(x))
            return false;
        return true;
    },
    alphanumeric: (x) => {
        if (!x)
            return false;
        const alphanumeric = /^[0-9a-zA-Z]+$/;
        if (!alphanumeric.test(x))
            return false;
        return true;
    },
    UUIDv4: (x) => {
        if (!x)
            return false;
        const uuidv4 = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
        if (!uuidv4.test(x))
            return false;
        return true;
    },
    sameAs: (x, y) => {
        if (x === y)
            return true;
        return false;
    },
    noSpecials: (x, space = true, //true = allow space
    extendJpn = false) => {
        if (!x)
            return true;
        let format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (!space)
            format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (extendJpn)
            format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~｀！＠＃＄％＾＆＊（）_＋ー＝「」『』；’：”＼｜、。＜＞・？〜]/;
        if (!space && extendJpn)
            format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~　｀！＠＃＄％＾＆＊（）_＋ー＝「」『』；’：”＼｜、。＜＞・？〜]/;
        if (format.test(x))
            return false;
        return true;
    },
    aFunction(x) {
        return Object.prototype.toString.call(x) == '[object Function]';
    }
};
