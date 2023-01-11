export interface VectorObject {
    isVectorObject: boolean;
    x: number;
    y: number;
    z: number;
    add: (x: VectorObject | number[] | number, y?: number, z?: number) => VectorObject;
    limit: (max: number) => VectorObject;
    div: (x: VectorObject | number[] | number, y?: number, z?: number) => VectorObject;
    mult: (x: VectorObject | number[] | number, y?: number, z?: number) => VectorObject;
    heading: () => number;
    sub: (x: VectorObject | number[] | number, y?: number, z?: number) => VectorObject;
    setMag: (n: number) => VectorObject;
    magSq: () => number;
    mag: () => number;
    normalize: () => VectorObject;
    copy: () => VectorObject;
    dist: (x: VectorObject | number, y?: number) => number;
    toVector2: () => number[];
    toVector3: () => number[];
}
/**
 * Structure and logic are based on p5js.
 */
export declare const createVector: (x: number, y: number, z?: number) => VectorObject;
export declare const FromVector: {
    create: (x: number, y: number, z?: number) => VectorObject;
};
