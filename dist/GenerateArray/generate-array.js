"use strict";
/**
 *  Generates an array with different types (number, object, string) of desired length.
 *  @param eleType asdasd
 *  @param len @required Length of the
 */
/*
export const generateArray = (eleType: string, len: number)=>{//Awaiting Documentation
    let result = []
    let randomNumber = 0
    let randomString = ""
    let tmpObj: {[key: string | number]: any} = {}
    switch(eleType){
        case "Array":
            for(let i = 0 ; i<len ; i++){
                randomNumber = Math.floor(Math.random() * 1000)
                result.push([randomNumber])
            }
            return result
        case "Object":
            let propertyName1 = exports.generateRandom("String",Math.floor(Math.random() * 5)+1)
            let propertyName2 = exports.generateRandom("String",Math.floor(Math.random() * 5)+1)
            for(let i = 0 ; i<len ; i++){
                for(let j = 0 ; j<2 ; j++){
                    tmpObj[propertyName1] = Math.floor(Math.random() * 1000)
                    tmpObj[propertyName2] = Math.floor(Math.random() * 1000)
                }
                result.push(tmpObj)
                tmpObj = {}
            }
            return result
        case "String":
            for(let i = 0 ; i<len ; i++){
                randomString = exports.generateRandom("String",Math.floor(Math.random() *6)+3)
                result.push(randomString)
            }
            return result
        case "Number":
            for(let i = 0 ; i<len ; i++){
                randomNumber = Math.floor(Math.random() * 10000)
                result.push(randomNumber)
            }
            return result
        case "Boolean":
            let choice = [true,false]
            for(let i = 0 ; i<len ; i++){
                randomNumber = Math.floor(Math.random() * 2)
                result.push(choice[randomNumber])
            }
            return result
        default:
            console.log("Error")
    }

}
*/ 
//# sourceMappingURL=generate-array.js.map