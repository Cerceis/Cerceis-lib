export const Prob = {
    roll(percentage: number): boolean{
        const fixed = percentage/100;
        if(fixed >= Math.random()) return true;
        return false;
    },
}


