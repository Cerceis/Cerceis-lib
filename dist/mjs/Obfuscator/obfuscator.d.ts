export declare class Obfuscator {
    constructor();
    private readonly _randomKey;
    /**
     *
     * @param inputStr String to obfuscate
     * @param {string} [key] A key to deobfuscate the result,
     * if non specified it will randomly generates a key and you will no be able to reverse it.
     * @returns {string} Obfuscated string.
     */
    obfuscate(inputStr: string, key?: string): string;
    /**
     *
     * @param inputStr String to deobfuscate
     * @param {string} key A key to deobfuscate the result,
     * @returns {string} Original string.
     */
    deobfuscate(inputStr: string, key: string): string;
    private readonly _stringSwapPair;
    obfuscatev2(inputStr: string): string;
    deobfuscatev2(inputStr: string): string;
    obfuscatev3(inputStr: string, key?: string): string;
    deobfuscatev3(inputStr: string, key?: string): string;
}
export declare const obfuscator: Obfuscator;
