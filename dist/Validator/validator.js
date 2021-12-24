export class Validator {
    inputValue;
    errors = [];
    value(inputValue) {
        this.inputValue = inputValue;
        return this;
    }
    //Static type checks
    static isDefined = (x) => x !== undefined && x !== null;
    static isUndefined = (x) => x === undefined;
    static isArray = Array.isArray;
    static isString = (x) => (typeof x === 'string' || x instanceof String);
    static isObject = (x) => Object.prototype.toString.call(x) === "[object Object]";
    static isNumber = (x) => Object.prototype.toString.call(x) === "[object Number]";
    static isBoolean = (x) => Object.prototype.toString.call(x) === "[object Boolean]";
    min(min) {
        if (!this.inputValue)
            return this;
        if (Validator.isArray(this.inputValue) || Validator.isString(this.inputValue)) {
            if (this.inputValue.length < min)
                this.errors.push({
                    errored: this.inputValue,
                    code: "MinReachedS",
                    labelEn: `Min ${min}`,
                    labelJpn: `最小 ${min}`
                });
        }
        else if (Validator.isNumber(this.inputValue)) {
            if (this.inputValue < min)
                this.errors.push({
                    errored: this.inputValue,
                    code: "MinReachedN",
                    labelEn: `Min ${min}`,
                    labelJpn: `最小 ${min}`
                });
        }
        return this;
    }
    max(max) {
        if (!this.inputValue)
            return this;
        if (Validator.isArray(this.inputValue) || Validator.isString(this.inputValue)) {
            if (this.inputValue.length > max)
                this.errors.push({
                    errored: this.inputValue,
                    code: "MaxReachedS",
                    labelEn: `Max ${max}`,
                    labelJpn: `最大 ${max}`
                });
        }
        else if (Validator.isNumber(this.inputValue)) {
            if (this.inputValue > max)
                this.errors.push({
                    errored: this.inputValue,
                    code: "MaxReachedN",
                    labelEn: `Max ${max}`,
                    labelJpn: `最大 ${max}`
                });
        }
        return this;
    }
    isEmail() {
        if (!this.inputValue)
            return this;
        if (!/.+@.+\..+/.test(this.inputValue))
            this.errors.push({
                errored: this.inputValue,
                code: "InvalidEmail",
                labelEn: "Invalid Email",
                labelJpn: "無効なメールです"
            });
        return this;
    }
    required() {
        if (this.inputValue === "" ||
            this.inputValue === null ||
            this.inputValue === undefined)
            this.errors.push({
                errored: this.inputValue,
                code: "REQUIRED",
                labelEn: "Required",
                labelJpn: "必要項目です"
            });
        return this;
    }
    alphanumeric() {
        if (!this.inputValue)
            throw "Please provide a value";
        let alphanumeric = /^[0-9a-zA-Z]+$/;
        if (!alphanumeric.test(this.inputValue))
            this.errors.push({
                errored: this.inputValue,
                code: "ALPHANUM",
                labelEn: "Value needs to be alphanumeric ( 0~9, a~Z )",
                labelJpn: "半角英文字・数字を入れてください ( 0~9, a~Z )"
            });
        return this;
    }
    noSpecials(space = true, //true = allow space
    extendJpn = false) {
        if (!this.inputValue)
            return this;
        var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (!space)
            format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (extendJpn)
            format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~｀！＠＃＄％＾＆＊（）_＋ー＝「」『』；’：”＼｜、。＜＞・？〜]/;
        if (!space && extendJpn)
            format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~　｀！＠＃＄％＾＆＊（）_＋ー＝「」『』；’：”＼｜、。＜＞・？〜]/;
        if (format.test(this.inputValue))
            this.errors.push({
                errored: this.inputValue,
                code: "SPESYMBOL",
                labelEn: "Must not contain special symbols (!@$%...etc)",
                labelJpn: "特殊記号は使えません (!@$%...など)"
            });
        return this;
    }
    //
    isUUIDv4() {
        if (!this.inputValue)
            throw "Please provide a value";
        let uuidv4 = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
        if (!uuidv4.test(this.inputValue))
            this.errors.push({
                errored: this.inputValue,
                code: "INVALID_UUIDV4",
                labelEn: "Value needs to be an v4 UUID",
                labelJpn: "無効なUUIDv4"
            });
        return this;
    }
    isSameAs(value) {
        if (!this.inputValue)
            throw "Please provide a value";
        if (this.inputValue === value)
            return this;
        this.errors.push({
            errored: this.inputValue,
            code: "NOT_SAME",
            labelEn: "Value not same",
            labelJpn: "再確認できませんでした"
        });
        return this;
    }
    verify(returnErrors = false) {
        if (this.errors.length > 0)
            return returnErrors ? this.errors : false;
        else
            return true;
    }
    /**
    * @deprecated Since v1.3. Use "verify" instead.
    */
    valid(returnErrors = false) {
        if (this.errors.length > 0)
            return returnErrors ? this.errors : false;
        else
            return true;
    }
    hasError() { return this.errors.length > 0 ? true : false; }
}
//# sourceMappingURL=validator.js.map