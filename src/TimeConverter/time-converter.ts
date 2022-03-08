export const toMs = (
    h: number = 0, 
    m: number = 0, 
    s: number = 0,
    ms: number = 0
): number => {
    return (
        h * 3600000 +
        m * 60000 +
        s * 1000 +
        ms
    )
}

export const toSeconds = (
    h: number = 0, 
    m: number = 0, 
    s: number = 0,
    ms: number = 0
): number => {
    return (
        h * 3600 +
        m * 60 +
        s +
        ms / 1000
    )
}

export const toMinutes = (
    h: number = 0, 
    m: number = 0, 
    s: number = 0,
    ms: number = 0
): number => {
    return (
        h * 60 +
        m +
        s / 60 +
        ms /　60000
    )
}

export const toHours = (
    h: number = 0, 
    m: number = 0, 
    s: number = 0,
    ms: number = 0
): number => {
    return (
        h +
        m / 60 +
        s / 3600 +
        ms / 1800000
    )
}