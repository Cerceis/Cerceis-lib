export declare const Is: {
    object: (x: Object) => boolean;
    emptyObject: (x: Object) => boolean;
    string: (x: any) => boolean;
    emptyString: (x: any) => boolean;
    number: (x: number) => boolean;
    boolean: (x: boolean) => boolean;
    array: (x: any[]) => boolean;
    null: (x: null) => boolean;
    undefined: (x: undefined) => boolean;
    falseValue: (x: any) => boolean;
    email: (x: string) => boolean;
    alphanumeric: (x: string) => boolean;
    isUUIDv4: (x: string) => boolean;
    isSameAs: (x: any, y: any) => boolean;
    noSpecials: (x: string, space?: boolean, extendJpn?: boolean | null) => boolean;
};
