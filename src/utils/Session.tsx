import {GetServerSidePropsContext} from "next";

export const getSession = async (context: GetServerSidePropsContext) => {
    const {req} = context;
    console.log(req.headers.cookie);
    return req.headers.cookie;
}
