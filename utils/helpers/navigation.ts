export const isActiveRoute = (pathname: string, url: string) => {
    if (url === "/" || url === "") {
        return pathname === "/";
    }

    if (url === "#") {
        return false;
    }

    const normalizedUrl = url.endsWith("/") ? url.slice(0, -1) : url;

    return pathname === normalizedUrl || pathname.startsWith(`${normalizedUrl}/`);
};
