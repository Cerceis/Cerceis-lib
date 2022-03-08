export const Prob = {
    roll(percentage) {
        const fixed = percentage / 100;
        if (fixed >= Math.random())
            return true;
        return false;
    },
};
