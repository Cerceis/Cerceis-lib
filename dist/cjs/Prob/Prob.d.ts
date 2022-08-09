export declare const Prob: {
    roll(percentage: number): boolean;
};
export declare class Gacha {
    private entries;
    private accumulatedWeight;
    constructor();
    addEntries(item: any, weight: number): void;
    getRandom(): any;
}
