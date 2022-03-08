export declare type Color = "Red" | "Green" | "Yellow" | "Blue" | "Magenta" | "Cyan" | "White";
export declare const Logger: {
    disabled: boolean;
    log(msg: string, color?: Color): void;
    error(msg: string): void;
    warn(msg: string): void;
    succ(msg: string): void;
};
