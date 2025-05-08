export type Color = "Red" | "Green" | "Yellow" | "Blue" | "Magenta" | "Cyan" | "White";
export declare const Logger: {
    disabled: boolean;
    log(msg: string, color?: Color): void;
    error(msg: string): void;
    warn(msg: string): void;
    succ(msg: string): void;
    /**
     *
     * @param progress Progress in float from 0 to 1 ex 0.5 = 50%
     */
    nodeProgress(current: number, total: number, sameLine?: boolean): void;
};
