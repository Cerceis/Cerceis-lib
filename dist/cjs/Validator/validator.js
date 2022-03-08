"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validator = exports.Validator = void 0;
const eng_js_1 = require("./locale/eng.js");
const jpn_js_1 = require("./locale/jpn.js");
const errorMsg = {
    eng: eng_js_1.localeEng,
    jpn: jpn_js_1.localeJpn
};
class Validator {
    constructor() {
        this.locale = "eng";
        this.currentErrorName = "";
        this.errorMap = {};
        this.pristineMap = {};
        this.valueMap = {};
    }
    value(inputValue) {
        this.inputValue = inputValue;
        return this;
    }
    setLocale(locale) {
        this.locale = locale;
    }
    /**
     *
     * @param inputName A name for the value used to group errors in errorMap. must be chained after value()
     * @returns
     */
    as(inputName) {
        this.currentErrorName = inputName;
        if (this.pristineMap[inputName] === undefined) {
            this.pristineMap[inputName] = true;
        }
        else if (this.valueMap[inputName] !== this.inputValue) {
            this.pristineMap[inputName] = false;
        }
        this.errorMap[inputName] = [];
        this.valueMap[inputName] = this.inputValue;
        return this;
    }
    _addError(err) {
        if (this.currentErrorName)
            if (this.errorMap[this.currentErrorName] && !this.pristineMap[this.currentErrorName]) {
                this.errorMap[this.currentErrorName].push(err);
            }
            else if (!this.errorMap[this.currentErrorName] && !this.pristineMap[this.currentErrorName]) {
                this.errorMap[this.currentErrorName] = [];
                this.errorMap[this.currentErrorName].push(err);
            }
    }
    /**
     *
     * @param min Check minimum, if the input value is a string,
     * it will check it's length. If it's a number, it will check mathematically.
     * (This does not check for null | undefined ! Use **required()** to check null values. )
     * @returns {this} this
     */
    min(min) {
        if (!this.inputValue)
            return this;
        if (Validator.isArray(this.inputValue) || Validator.isString(this.inputValue)) {
            if (this.inputValue.length < min)
                this._addError({
                    errored: this.inputValue,
                    code: "MinReachedS",
                    label: errorMsg[this.locale].min(min),
                });
        }
        else if (Validator.isNumber(this.inputValue)) {
            if (this.inputValue < min)
                this._addError({
                    errored: this.inputValue,
                    code: "MinReachedN",
                    label: errorMsg[this.locale].min(min),
                });
        }
        return this;
    }
    max(max) {
        if (!this.inputValue)
            return this;
        if (Validator.isArray(this.inputValue) || Validator.isString(this.inputValue)) {
            if (this.inputValue.length > max)
                this._addError({
                    errored: this.inputValue,
                    code: "MaxReachedS",
                    label: errorMsg[this.locale].max(max),
                });
        }
        else if (Validator.isNumber(this.inputValue)) {
            if (this.inputValue > max)
                this._addError({
                    errored: this.inputValue,
                    code: "MaxReachedN",
                    label: errorMsg[this.locale].max(max),
                });
        }
        return this;
    }
    isEmail() {
        if (!this.inputValue)
            return this;
        if (!/.+@.+\..+/.test(this.inputValue))
            this._addError({
                errored: this.inputValue,
                code: "InvalidEmail",
                label: errorMsg[this.locale].isEmail,
            });
        return this;
    }
    required() {
        if (this.inputValue === "" ||
            this.inputValue === null ||
            this.inputValue === undefined)
            this._addError({
                errored: this.inputValue,
                code: "REQUIRED",
                label: errorMsg[this.locale].required,
            });
        return this;
    }
    alphanumeric() {
        if (!this.inputValue)
            throw "Please provide a value";
        let alphanumeric = /^[0-9a-zA-Z]+$/;
        if (!alphanumeric.test(this.inputValue))
            this._addError({
                errored: this.inputValue,
                code: "ALPHANUM",
                label: errorMsg[this.locale].alphanumeric,
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
            this._addError({
                errored: this.inputValue,
                code: "SPESYMBOL",
                label: errorMsg[this.locale].noSpecials,
            });
        return this;
    }
    isUUIDv4() {
        if (!this.inputValue)
            throw "Please provide a value";
        let uuidv4 = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
        if (!uuidv4.test(this.inputValue))
            this._addError({
                errored: this.inputValue,
                code: "INVALID_UUIDV4",
                label: errorMsg[this.locale].isUUIDv4,
            });
        return this;
    }
    isSameAs(value) {
        if (!this.inputValue)
            throw "Please provide a value";
        if (this.inputValue === value)
            return this;
        this._addError({
            errored: this.inputValue,
            code: "NOT_SAME",
            label: errorMsg[this.locale].isSameAs,
        });
        return this;
    }
    verify(returnErrors = false) {
        if (Object.keys(this.errorMap).length > 0)
            return returnErrors ? this.errorMap : false;
        else
            return true;
    }
    hasError() {
        let hasError = false;
        if (hasError)
            return true;
        for (let field in this.errorMap) {
            if (this.errorMap[field].length > 0)
                return true;
        }
        return hasError;
    }
    reset() {
        this.inputValue = null;
        this.errorMap = {};
        this.currentErrorName = "";
        this.pristineMap = {};
        this.valueMap = {};
    }
}
exports.Validator = Validator;
//Static type checks
Validator.isDefined = (x) => x !== undefined && x !== null;
Validator.isUndefined = (x) => x === undefined;
Validator.isArray = Array.isArray;
Validator.isString = (x) => (typeof x === 'string' || x instanceof String);
Validator.isObject = (x) => Object.prototype.toString.call(x) === "[object Object]";
Validator.isNumber = (x) => Object.prototype.toString.call(x) === "[object Number]";
Validator.isBoolean = (x) => Object.prototype.toString.call(x) === "[object Boolean]";
exports.validator = new Validator();
