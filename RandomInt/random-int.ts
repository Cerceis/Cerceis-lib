export const RandomInt = (min: number, max: number): number => {
	let result: number = 0;
	result = Math.floor(Math.random() * (max - min))+ min
	return result
}