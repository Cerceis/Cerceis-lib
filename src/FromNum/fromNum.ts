export const FromNum = {
    /**
     * A generic roll.
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
     * @returns _diceRoll;
     */
    diceRoll(num: number){
        const _func = {
            _diceRoll:(max:number) => Math.floor(Math.random() * (max - 1))+ 1,
            /**
             * 
             * @param diceType Type of dice, can be any number, but typically are, 3, 6, 10, 20.
             * @returns number[]
             */
            D:(diceType: number): number[] =>{
                const rs: number[] = [];
                for(let i = 0; i < num; i++)
                    rs.push(_func._diceRoll(diceType+1));
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
    minMaxScale(x: number, min:number, max:number): number{
        return (x - min) / (max - min)
    },
    /**
     * Return scaled down number back to normal.
     * @param x  Input number
     * @param min Min number
     * @param max Max number
     * @returns original value.
     */
    unMinMaxScale(x: number, min: number, max: number): number{
        return (x * ( max - min)) + min
    }
}
