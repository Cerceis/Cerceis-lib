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
