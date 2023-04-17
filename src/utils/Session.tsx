import {IncomingMessage} from "http";
import {NextApiRequestCookies} from "next/dist/server/api-utils";

export const getSession = async (param: { req: IncomingMessage & { cookies: NextApiRequestCookies } }) => {
    const {req} = param;
    return req.cookies.session;
}

export const getCsrfToken = async (param: { req: IncomingMessage & { cookies: NextApiRequestCookies } }) => {
    const {req} = param;
    return req.cookies["XSRF-TOKEN"];
}

export const getCurrentUser = async (param: { req: IncomingMessage & { cookies: NextApiRequestCookies } }) => {
    return await getSession(param);
}