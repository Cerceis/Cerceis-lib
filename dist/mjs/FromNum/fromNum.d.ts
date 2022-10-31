export declare const FromNum: {
    /**
     * A generic roll. Anything larger than 100 will be true,
     * lesser than 0 will be false.
     * @param percentage 0~100
     * @returns Fail(false)/Success(true)
     */
    roll(percentage: number): boolean;
    /**
     * Dice roll for your typical TRPG game.
     * Ex) FromNum.diceRoll(3).D(20) = Roll 3 D20 Dice.
     * Ex) FromNum.diceRoll(1).D(6) = Roll 1 D6 Dice.
     * @param num number of dice to roll
     * @returns diceRoll;
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
    /**
     * Return the sum of the values.
     * @param nums  Array of numbers
     * @returns number[].
     */
    sum(nums: number[]): number;
    /**
     * SoftMax functions/ softargmax/ normalized exponential function.
     * Returns a vector of K real numbers into a probability distribution of K possible outcomes.
     * Returns a new array.
     * @param nums  Array of numbers
     * @returns number[].
     */
    softMax(input: number[]): number[];
    /**
     * Return the mean of an list of numbers.
     * @param nums  Array of numbers
     * @returns number.
     */
    mean(input: number[]): number;
    /**
     * Convert numeric values into Roman Numeral string.
     * @param number Input number.
     * @returns string
     */
    toRomanNumeral(number: number): string;
    /**
     * Sigmoid function
     * A sigmoid function is a bounded, differentiable,
     * real function that is defined for all real input values
     * and has a non-negative derivative at each point and exactly one inflection point.
     * @param {(Number|Number[])} x number.
     * @returns number
     */
    sigmoid(x: number | number[]): number | number[];
    /**
    * ReLU (Rectified Linear Unit function)
    * // f(x) = max(0, x)
    * The rectified linear activation function or ReLU
    * is a non-linear function or piecewise linear function
    * that will output the input directly if it is positive, otherwise, it will output zero.
    * @param {Number[])} x number.
    * @returns number[]
    */
    relu(xs: number[]): number[];
    /**
    * Softplus function (Smoother version of ReLU)
    * // f(x) = log(1+ exp(x))
    * @param {Number[])} x number.
    * @returns number[]
    */
    softPlus(xs: number[]): number[];
};
