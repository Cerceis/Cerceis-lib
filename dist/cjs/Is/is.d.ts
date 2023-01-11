export declare const Is: {
    object: (x: any) => boolean;
    emptyObject: (x: Object) => boolean;
    string: (x: any) => boolean;
    emptyString: (x: any) => boolean;
    number: (x: any) => boolean;
    boolean: (x: any) => boolean;
    array: (x: any) => boolean;
    null: (x: any) => boolean;
    undefined: (x: undefined) => boolean;
    falseValue: (x: any) => boolean;
    email: (x: string) => boolean;
    alphanumeric: (x: string) => boolean;
    UUIDv4: (x: string) => boolean;
    sameAs: (x: any, y: any) => boolean;
    noSpecials: (x: string, space?: boolean, extendJpn?: boolean | null) => boolean;
    aFunction(x: any): boolean;
};
