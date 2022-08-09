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

const jpnDayMap: any = {
    0: "日",
    1: "月",
    2: "火",
    3: "水",
    4: "木",
    5: "金",
    6: "土",
}

/**
 * Convert to readable x shotest possible date length.
 * Year > Month > Day > Same day > time only.
 * currently support jpn only
 * @params input The input date string
 * @locale language, default = jpn
 */
export const toDateTimeShortLocale = (input: string, locale: string = "jpn") => {
    
    const date: Date = new Date(input);
    const currentDate: Date = new Date();

    if(currentDate.getFullYear() !== date.getFullYear()){
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`
    }
    if(currentDate.getMonth() !== date.getMonth()){
        switch(locale){
            case "jpn":
                return `${date.getMonth() + 1}月${date.getDate()}日`;
        }
    }
    if(currentDate.getDate() !== date.getDate()){
        switch(locale){
            case "jpn":
                return `${date.getDate()}日${jpnDayMap[date.getDay()]}`;
        }
    }
    switch(locale){
        case "jpn":
            return `${String(date.getHours()).padStart(2,'0')}:${String(date.getMinutes()).padStart(2,'0')}`;
    }
}
