export class Obfuscator{
    constructor(){}
    private readonly _randomKey = (): string => 
        (new Date().getTime() / 1000 | 0).toString(16) + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, () => {
            return (Math.random() * 16 | 0).toString(16);
        }).toLowerCase()
    /**
     * 
     * @param inputStr String to obfuscate
     * @param {string} [key] A key to deobfuscate the result, 
     * if non specified it will randomly generates a key and you will no be able to reverse it. 
     * @returns {string} Obfuscated string.
     */
    public obfuscate(inputStr: string, key: string = this._randomKey()): string{
        let keyValue:string = ""
        let result = ""
        for(let i = 0 ; i<key.length ; i++){  
            keyValue += key.charCodeAt(i)
        }
        keyValue = String(keyValue).split("").reverse().join("")
        keyValue = "l"+keyValue+"l"
        for(let i = 0 ; i<inputStr.length ; i++){  
            result += inputStr.charCodeAt(i)+keyValue
        }
        return result
    }
    
    /**
     * 
     * @param inputStr String to deobfuscate
     * @param {string} key A key to deobfuscate the result, 
     * @returns {string} Original string.
     */
    public deobfuscate(inputStr: string, key: string): string{
        let keyValue: string = ""
        for(let i = 0 ; i<key.length ; i++){  
            keyValue += key.charCodeAt(i)
        }
        keyValue = String(keyValue).split("").reverse().join("")
        keyValue = "l"+keyValue+"l"
        let unlockedData = inputStr.split(keyValue)
        let filtered = unlockedData.filter((el)=> (el !== null) && (el !== "") && (el !== undefined) );
        let result = ""
        filtered.forEach(e => result += String.fromCharCode(Number(e)) )
        return result
    }

    private readonly _stringSwapPair = (inputString: string): string=>{
        let result = ""
        for(let i = 0 ; i<inputString.length ; i++ ){
            if(i%2 === 1) result += inputString[i]+inputString[i-1]
            if(i%2 === 0 && i===inputString.length-1) result += inputString[i]
        }
        return result
    }
    
    public obfuscatev2(inputStr: string):string{
        const sortByStringLen = (a: string,b: string)=> a.length > b.length ? "s"+b+a : a+b;
        const reformat2asc = (text: string)=>{
            let result = ""
            for(let i = 0 ; i<text.length ; i++){
                if(i%2 === 1){
                    result += sortByStringLen(
                        String(text.charCodeAt(i-1)),
                        String(text.charCodeAt(i))
                    ) 
                    if(i !== text.length-1 && i !== 0) result+=":"
                }
                if(i%2 === 0 && i===text.length-1) result += "e"+String(text.charCodeAt(i))
            }
            return result
        }
        const bulkIncreament = (input: string)=>{
            let result: string[] = []
            input.split(":").forEach((e,i) => {
                e[0] !== "e" && e[0] !== "s" ? 
                result.push(String(Number(e)+(i+i*2))):
                result.push(e)
            })
            return result
        }
        return bulkIncreament(reformat2asc(this._stringSwapPair(inputStr))).reduce((f,l)=> f+":"+l);
    }

    public deobfuscatev2(inputStr: string): string{
        const cs = (text: string)=>{
            const _m: {[key: number]: Function} = {
                2: (t: string)=> [t.slice(0,1),t.substring(1)],
                3: (t: string)=> [t.slice(0,1),t.substring(1)],
                4: (t: string)=> [t.slice(0,2),t.substring(2)],
                5: (t: string)=> [t.slice(0,2),t.substring(2)],
                6: (t: string)=> [t.slice(0,3),t.substring(3)],
            }
            return _m[(text.length)](text)
        }
        let result: string = ""
        inputStr.split(":").forEach((e,i) => {
            switch(e[0]){
                case "s":
                    cs(e.substring(1)).forEach((e2: string)=>{
                        result += String.fromCharCode(Number(e2))
                    })
                    break
                case "e":
                    result += String.fromCharCode(Number(e.substring(1)))
                    break
                default :
                    let strs = cs(String(Number(e)-(i+i*2)))
                    result += String.fromCharCode(Number(strs[1]))+String.fromCharCode(Number(strs[0]))
            }
        })
        return result
    }
}
export const obfuscator = new Obfuscator()
