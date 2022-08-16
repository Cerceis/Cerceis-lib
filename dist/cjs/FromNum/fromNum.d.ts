export declare const FromNum: {
    /**
     * A generic roll.
     * @param percentage 0~100
     * @returns Fail(false)/Success(true)
     */
    roll(percentage: number): boolean;
    /**
     * Dice roll for your typical TRPG game.
     * Ex) FromNum.diceRoll(3).D(20) = Roll 3 D20 Dice.
     * Ex) FromNum.diceRoll(1).D(6) = Roll 1 D6 Dice.
     * @param num number of dice to roll
     * @returns _diceRoll;
     */
    diceRoll(num: number): {
        _diceRoll: (max: number) => number;
        /**
         *
         * @param diceType Type of dice, can be any number, but typically are, 3, 6, 10, 20.
         * @returns number[]
         */
        D: (diceType: number) => number[];
    };
    /**
     * Scale number down to 0 ~ 1.
     * @param x  Input number
     * @param min Min number
     * @param max Max number
     * @returns scaled value.
     */
    minMaxScale(x: number, min: number, max: number): number;
    /**
     * Return scaled down number back to normal.
     * @param x  Input number
     * @param min Min number
     * @param max Max number
     * @returns original value.
     */
    unMinMaxScale(x: number, min: number, max: number): number;
};
