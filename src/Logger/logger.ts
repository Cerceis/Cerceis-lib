import { Delay } from "../Delay/delay";


const Colors: any = {
    "Red": 31,
    "Green": 32,
    "Yellow": 33,
    "Blue": 34,
    "Magenta": 35,
    "Cyan": 36,
    "White": 37,
}

export type Color = "Red" | "Green" | "Yellow" |
"Blue" | "Magenta" | "Cyan" | "White"

export const Logger = {
    disabled: false,
    log(msg: string, color: Color = "White") {
        if(this.disabled) return;
        console.log(
            `%s\x1b[${Colors[color]}m%s\x1b[0m`,
            `[LOG] - ${(new Date).toLocaleString()}    `,
            msg
        );
    },
    error(msg: string){
        if(this.disabled) return;
        console.log(
            `%s\x1b[31m%s\x1b[0m`,
            `[LOG] - ${(new Date).toLocaleString()}    `,
            msg
        );
    },
    warn(msg: string){
        if(this.disabled) return;
        console.log(
            `%s\x1b[33m%s\x1b[0m`,
            `[LOG] - ${(new Date).toLocaleString()}    `,
            msg
        );
    },
    succ(msg: string){
        if(this.disabled) return;
        console.log(
            `%s\x1b[32m%s\x1b[0m`,
            `[LOG] - ${(new Date).toLocaleString()}    `,
            msg
        );
    },
	/**
	 * 
	 * @param progress Progress in float from 0 to 1 ex 0.5 = 50%
	 */
	nodeProgress(current: number, total: number, sameLine: boolean = false){
		const percent = current / total;
		const barLen = 20;
		const filledLen = Math.round( barLen * percent );
		const emptyLen = barLen - filledLen;

		let bar = "";
		if(filledLen > 1){
			bar += "❤️".repeat(filledLen - 1);
			bar += "🐰";
		}else{
			bar += "🐰";
		}
		if(emptyLen > 0){
			bar += "  ".repeat(emptyLen -1);
			bar += "🥕";
		}
		const percentText = `${Math.round(percent * 100)}%`

		if(sameLine){
			process.stdout.clearLine(0);         // Clear the current line
			process.stdout.cursorTo(0);          // Move the cursor to the beginning of the line
			process.stdout.write(`[${bar}] ${percentText}`);
			if(percent >= 1)
				process.stdout.write('\n');
		}else{
			console.log(`[${bar}] ${percentText}`);
		}
		
	}
}

