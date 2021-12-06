export const MinMaxScaler = (x: number, min:number, max:number): number => {
    return (x - min) / (max - min)
}