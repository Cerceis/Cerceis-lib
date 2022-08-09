
export const MinMaxScaler = (x: number, min:number, max:number): number => {
    return (x - min) / (max - min)
}

export const unMinMaxScaler = (x: number, min: number, max: number): number =>{
    return (x * ( max - min)) + min
}
