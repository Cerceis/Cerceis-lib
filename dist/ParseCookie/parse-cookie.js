export const parseCookies = (cookie) => {
    let list = {};
    let rc = cookie;
    rc && rc.split(';').forEach((cookie) => {
        let parts = cookie.split('=');
        let cookieKey = parts?.shift();
        if (cookieKey)
            list[cookieKey.trim()] = decodeURI(parts.join('='));
    });
    return list;
};
//# sourceMappingURL=parse-cookie.js.map