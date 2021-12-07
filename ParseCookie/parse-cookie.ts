export const parseCookies = (cookie: string): any => {
    let list: any = {};
    let rc: string = cookie;
    rc && rc.split(';').forEach((cookie) => {
        let parts: string[] = cookie.split('=');
        let cookieKey: string | undefined = parts?.shift()
        if(cookieKey)
            list[cookieKey.trim()] = decodeURI(parts.join('='));
    });
    return list;
}