//if (typeof window === 'undefined' && typeof process === 'object')
//import { readFileSync ,writeFileSync, statSync } from "fs";
//import * as readline from 'readline';
const Colors = {
    "Red": 31,
    "Green": 32,
    "Yellow": 33,
    "Blue": 34,
    "Magenta": 35,
    "Cyan": 36,
    "White": 37,
};
export const Logger = {
    disabled: false,
    log(msg, color = "White") {
        if (this.disabled)
            return;
        console.log(`%s\x1b[${Colors[color]}m%s\x1b[0m`, `[LOG] - ${(new Date).toLocaleString()}    `, msg);
    },
    error(msg) {
        if (this.disabled)
            return;
        console.log(`%s\x1b[31m%s\x1b[0m`, `[LOG] - ${(new Date).toLocaleString()}    `, msg);
    },
    warn(msg) {
        if (this.disabled)
            return;
        console.log(`%s\x1b[33m%s\x1b[0m`, `[LOG] - ${(new Date).toLocaleString()}    `, msg);
    },
    succ(msg) {
        if (this.disabled)
            return;
        console.log(`%s\x1b[32m%s\x1b[0m`, `[LOG] - ${(new Date).toLocaleString()}    `, msg);
    },
    /**
     * This function only works in nodejs.
     * To reset the bar, Set it to 100% once.
     */
    /*
    progressInit: false,
    progress(percentage: number, barLen: number = 20){
        // Why is the promise not included in the library.
        readline.cursorTo(process.stdout,0);
        const barToFill = Math.round(percentage/100 * barLen);
        const barTextArray: string[] = new Array(barToFill).fill("█");
        while(barTextArray.length < barLen)
            barTextArray.push("░");
        if(!this.progressInit){
            process.stdout.write("\n");
            this.progressInit = true;
        }
        process.stdout.moveCursor(0, -1); // up one line
        process.stdout.clearLine(1);
        process.stdout.write(`[${barTextArray.join("")}] ${percentage}/100 \n`);
        if(percentage === 100) this.progressInit = false;
    }
    */
    /**
     * *Only works with Node.js environment!
     * Depended on the fs module.
     * @param path Absolute path of the log file

    writeLog(path: string, msg: string){
        if(!statSync || !readFileSync || !writeFileSync) throw "Not supported";
        try{
            if(statSync(path)){
                let tmp = (readFileSync(path)).toString();
                tmp += `[${(new Date).toLocaleString()}] - ${msg}\n`;
                writeFileSync(path, tmp);
            }
        }catch(err: any){
            if(err && (err.syscall === 'stat' && err.code === 'ENOENT'))
                writeFileSync(path,`[${(new Date).toLocaleString()}] - ${msg}\n`);
        }
    }
    */
};
