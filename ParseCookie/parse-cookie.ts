export const parseCookies = (cookie: string): any => {
    let list = {};
    let rc: string = cookie;
    rc && rc.split(';').forEach((cookie) => {
        var parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });
    return list;
}