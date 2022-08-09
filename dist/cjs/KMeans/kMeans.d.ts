interface Cluster {
    id: number;
    position: number;
    childs: number[];
}
export declare const KMeans: (k: number | undefined, arr: number[], attempts?: number) => Cluster[];
export {};
