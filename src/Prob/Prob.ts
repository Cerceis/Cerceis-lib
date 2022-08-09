export const Prob = {
    roll(percentage: number): boolean{
        const fixed = percentage/100;
        if(fixed >= Math.random()) return true;
        return false;
    },
}

export class Gacha{
    private entries: {obj: any, accumulatedWeight:number}[] = [];
    private accumulatedWeight: number = 0.0;
    constructor(){}
    public addEntries(item: any, weight: number){
        this.accumulatedWeight += weight;
        this.entries.push({
            obj:item,
            accumulatedWeight:this.accumulatedWeight
        })
    }
    public getRandom(){
        const r = Math.random() * this.accumulatedWeight;
        return this.entries.find((entry: {obj: any, accumulatedWeight:number})=>{
            return entry.accumulatedWeight >= r;
        })?.obj;
    }   
}
/*
var entries = [];
var accumulatedWeight = 0.0;

this.addEntry = function(object, weight) {
    accumulatedWeight += weight;
    entries.push( { object: object, accumulatedWeight: accumulatedWeight });
}

this.getRandom = function() {
    var r = Math.random() * accumulatedWeight;
    return entries.find(function(entry) {
        return entry.accumulatedWeight >= r;
    }).object;
}   
*/