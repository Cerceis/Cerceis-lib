import { primeConst, compressionHash } from "./constants.js";
export const Sha256 = (inputStr) => {
    const _toBinary = (text) => {
        let rs = "";
        for (let i = 0; i < text.length; i++) {
            rs += text[i].charCodeAt(0).toString(2).padStart(8, "0");
        }
        return rs;
    };
    //Shift right
    //Rotate right
    //XOR
    //ADD <= remember to keep it in 32 bit range
    const _rotr = (arr, attempt = 1) => {
        let tmp = [...arr];
        for (let i = 0; i < attempt; i++) {
            tmp = [tmp.pop(), ...tmp];
        }
        return tmp;
    };
    const _shr = (arr, attempt = 1) => {
        let tmp = [...arr];
        for (let i = 0; i < attempt; i++) {
            tmp.pop();
            tmp.unshift("0");
        }
        return tmp;
    };
    const _xor = (arrA, arrB, arrC) => {
        const tmp = [];
        arrA.forEach((bit, index) => {
            tmp[index] = String(Number(bit) ^ Number(arrB[index]) ^ Number(arrC[index]));
        });
        return tmp;
    };
    const _add = (arrA, arrB) => {
        const tmp = [];
        const len = arrA.length;
        let extra = 0;
        for (let i = arrA.length - 1; i >= 0; i--) {
            const bitValue = Number(arrA[i]) + Number(arrB[i]) + extra;
            tmp[i] = bitValue > 1 ? String(bitValue - 2) : String(bitValue);
            extra = bitValue > 1 ? 1 : 0;
        }
        return tmp;
    };
    /**
     * Functions
     * choice, given x,y,z. If x = 1 takes y, if x = 0 takes z
     * major, given x,y,z. If numbers of 1 > 0 then 1. else 0.
     */
    const _choice = (arrA, arrB, arrC) => {
        let tmp = [];
        arrA.forEach((bit, index) => {
            tmp[index] = bit === "1" ? arrB[index] : arrC[index];
        });
        return tmp;
    };
    const _major = (arrA, arrB, arrC) => {
        let tmp = [];
        arrA.forEach((bit, index) => {
            const val = bit + arrB[index] + arrC[index];
            if (val === "000" || val === "001" ||
                val === "010" || val === "100")
                tmp[index] = "0";
            else if (val === "111" || val === "110" ||
                val === "101" || val === "011")
                tmp[index] = "1";
        });
        return tmp;
    };
    /**
     * Compound movements
     * sigZero = ROTR 7, ROTR 18, SHR 3, XOR
     * sigOne = ROTR 17, ROTR 19, SHR 10, XOR
     * uSigZero = ROTR 2, ROTR 13, ROTR 22, XOR
     * uSigOne = ROTR 6, ROTR 11, ROTR 25, XOR
     */
    const _sigZero = (arr) => {
        const rotr7 = _rotr(arr, 7);
        const rotr18 = _rotr(arr, 18);
        const shr3 = _shr(arr, 3);
        return _xor(rotr7, rotr18, shr3);
    };
    const _sigOne = (arr) => {
        const rotr17 = _rotr(arr, 17);
        const rotr19 = _rotr(arr, 19);
        const shr10 = _shr(arr, 10);
        return _xor(rotr17, rotr19, shr10);
    };
    const _uSigZero = (arr) => {
        const rotr2 = _rotr(arr, 2);
        const rotr13 = _rotr(arr, 13);
        const rotr22 = _rotr(arr, 22);
        return _xor(rotr2, rotr13, rotr22);
    };
    const _uSigOne = (arr) => {
        const rotr6 = _rotr(arr, 6);
        const rotr11 = _rotr(arr, 11);
        const rotr25 = _rotr(arr, 25);
        return _xor(rotr6, rotr11, rotr25);
    };
    const shiftCompressionMap = (compressionMap) => {
        compressionMap["h"] = [...compressionMap["g"]];
        compressionMap["g"] = [...compressionMap["f"]];
        compressionMap["f"] = [...compressionMap["e"]];
        compressionMap["e"] = [...compressionMap["d"]];
        compressionMap["d"] = [...compressionMap["c"]];
        compressionMap["c"] = [...compressionMap["b"]];
        compressionMap["b"] = [...compressionMap["a"]];
        compressionMap["a"] = [];
    };
    /**
    * Structure will be:
    * The binary of the message + 1 as separator + padding of 0 until 448 bits + length of the message with start padding of 0.
    * End result will be total of 512 in length
    */
    let messageBin = _toBinary(inputStr);
    const messageBlocks = [];
    const messageLengthBin = messageBin.length.toString(2).padStart(64, "0");
    const blockCount = Math.ceil((messageBin.length + 1 + 64) / 512);
    const finalLength = blockCount * 512;
    /*
    messageBin += "1" //Separator
    messageBin = messageBin.padEnd(512 * blockCount - 64, "0") //padding of 0 until 448 bits
    messageBin += messageLengthBin //Remaining 64 with length of the message with start padding of 0.
    */
    // 𝑘=512𝑖+447−𝑚
    /**
     * k = paddings
     * i = blockCount
     * m = input length
     * Pre-processing (Padding):
        begin with the original message of length L bits
        append a single '1' bit
        append K '0' bits, where K is the minimum number >= 0 such that L + 1 + K + 64 is a multiple of 512
        append L as a 64-bit big-endian integer, making the total post-processed length a multiple of 512 bits
        such that the bits in the message are L 1 00..<K 0's>..00 <L as 64 bit integer> = k*512 total bits
     */
    messageBin += "1"; //Separator
    messageBin = messageBin.padEnd(finalLength - 64, "0"); //padding of 0 until 448 bits
    messageBin += messageLengthBin; //Remaining 64 with length of the message with start padding of 0.  
    for (let i = 0; i < blockCount; i++) {
        let messageChunks = messageBin.slice(i * 512, i * 512 + 512);
        //Add padding to last block
        messageBlocks.push(messageChunks);
    }
    let finalCompression = Object.assign({}, compressionHash);
    //message schedule
    messageBlocks.forEach((block, bi) => {
        let localCompression = Object.assign({}, finalCompression);
        const words = [];
        for (let i = 0; i < 16; i++) {
            words.push(block.slice(i * 32, i * 32 + 32).split(""));
        }
        //Words need to be 64 in length, so we gonna expand it
        //sigOne(-2) + (-7) + sigZero(-15) + (-16)
        while (words.length < 64) {
            words.push(_add(_add(_add(_sigOne(words[words.length - 2]), words[words.length - 7]), _sigZero(words[words.length - 15])), words[words.length - 16]));
        }
        //Compression
        /**
         * T1 = uSigOne(e) + choice(e,f,g) + h + K0 + W0
         * T2 = uSigZero(a) + major(a,b,c)
         */
        words.forEach((word, index) => {
            const t1 = _add(_add(_add(_add(_uSigOne(localCompression.e), _choice(localCompression.e, localCompression.f, localCompression.g)), localCompression.h), primeConst[index]), word);
            const t2 = _add(_uSigZero(localCompression.a), _major(localCompression.a, localCompression.b, localCompression.c));
            shiftCompressionMap(localCompression);
            localCompression.a = _add(t1, t2);
            localCompression.e = _add(localCompression.e, t1);
        });
        for (let id in localCompression) {
            if (bi === 0)
                finalCompression[id] = _add(compressionHash[id], localCompression[id]);
            else
                finalCompression[id] = _add(finalCompression[id], localCompression[id]);
        }
    });
    let result = "";
    for (let id in finalCompression)
        result += parseInt(finalCompression[id].join(""), 2).toString(16);
    return result;
};
