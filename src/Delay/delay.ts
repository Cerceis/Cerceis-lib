/**
 * An async delay. Ex) await delay(1000);
 * @param ms Delay duration in milisecond
 */
export const Delay = (ms: number): Promise<void> => {
    return new Promise((resolve)=>{
        setTimeout(resolve, ms);
    })
}