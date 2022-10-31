export const FromNum = {
    /**
     * A generic roll. Anything larger than 100 will be true,
     * lesser than 0 will be false.
     * @param percentage 0~100
     * @returns Fail(false)/Success(true)
     */
    roll(percentage: number): boolean {
        const fixed = percentage / 100;
        if (fixed >= Math.random()) return true;
        return false;
    },
    /**
     * Dice roll for your typical TRPG game.
     * Ex) FromNum.diceRoll(3).D(20) = Roll 3 D20 Dice.
     * Ex) FromNum.diceRoll(1).D(6) = Roll 1 D6 Dice.
     * @param num number of dice to roll
     * @returns diceRoll;
     */
    diceRoll(num: number) {
        const _func = {
            _diceRoll: (max: number) => Math.floor(Math.random() * (max - 1)) + 1,
            /**
             * 
             * @param diceType Type of dice, can be any number, but typically are, 3, 6, 10, 20.
             * @returns number[]
             */
            D: (diceType: number): number[] => {
                const rs: number[] = [];
                for (let i = 0; i < num; i++)
                    rs.push(_func._diceRoll(diceType + 1));
                return rs;
            }
        }
        return _func;
    },
    /**
     * Scale number down to 0 ~ 1.
     * @param x  Input number
     * @param min Min number
     * @param max Max number
     * @returns scaled value.
     */
    minMaxScale(x: number, min: number, max: number): number {
        return (x - min) / (max - min)
    },
    /**
     * Return scaled down number back to normal.
     * @param x  Input number
     * @param min Min number
     * @param max Max number
     * @returns original value.
     */
    unMinMaxScale(x: number, min: number, max: number): number {
        return (x * (max - min)) + min
    },
    /**
     * Return the sum of the values.
     * @param nums  Array of numbers
     * @returns number[].
     */
    sum(nums: number[]): number {
        return nums.reduce((a, b) => a + b);
    },
    /**
     * SoftMax functions/ softargmax/ normalized exponential function.
     * Returns a vector of K real numbers into a probability distribution of K possible outcomes. 
     * Returns a new array.
     * @param nums  Array of numbers
     * @returns number[].
     */
    softMax(input: number[]): number[] {
        if (input.length === 0) return [];
        const sum = input.reduce((a, b) => a + Math.exp(b), 0);
        return input.map((n) => {
            return Math.exp(n) / sum
        })
    },
    /**
     * Return the mean of an list of numbers.
     * @param nums  Array of numbers
     * @returns number.
     */
    mean(input: number[]): number {
        if (input.length === 0) return 0;
        return input.reduce((a, b) => a + Math.exp(b), 0) / input.length;
    },
    /**
     * Convert numeric values into Roman Numeral string.
     * @param number Input number.
     * @returns string
     */
    toRomanNumeral(number: number): string {
        const strMap: { [key: string]: number } = {
            M: 1000, CM: 900, D: 500, CD: 400,
            C: 100, XC: 90, L: 50, XL: 40,
            X: 10, IX: 9, V: 5, IV: 4, I: 1,
        }
        let input = number;
        let rs: string = "";
        for (let n in strMap) {
            const tmp = Math.floor(input / strMap[n]);
            for (let i = 0; i < tmp; i++) rs += n;
            input -= tmp * strMap[n];
        }
        return rs
    },
    /**
     * Sigmoid function
     * A sigmoid function is a bounded, differentiable, 
     * real function that is defined for all real input values
     * and has a non-negative derivative at each point and exactly one inflection point. 
     * @param {(Number|Number[])} x number.
     * @returns number
     */
    sigmoid(x: number | number[]): number | number[] {
        const _func = (_x: number) => 1 / (1 + Math.exp(-_x));
        if (Array.isArray(x)) return x.map(n => _func(n));
        return _func(x);
    },
    /**
    * ReLU (Rectified Linear Unit function)
    * // f(x) = max(0, x)
    * The rectified linear activation function or ReLU
    * is a non-linear function or piecewise linear function 
    * that will output the input directly if it is positive, otherwise, it will output zero.
    * @param {Number[])} x number.
    * @returns number[]
    */
    relu(xs: number[]): number[] {
        const max: number = Math.max(...xs);
        return xs.map(x => x === max ? x : 0);
    },
    /**
    * Softplus function (Smoother version of ReLU)
    * // f(x) = log(1+ exp(x))
    * @param {Number[])} x number.
    * @returns number[]
    */
    softPlus(xs: number[]): number[] {
        return xs.map(x => Math.log(1 + Math.exp(x)));
    },
}


