const URL = process.env.API_URL || "http://localhost:3000";
const getFromEndpoint = async ({endpoint, method, headers, body}: {
    endpoint: string,
    method: "GET" | "POST" | "PUT" | "DELETE",
    headers: any,
    body?: any
}) => {
    console.log(headers)
    try {
        const response = await fetch(URL + endpoint, {
            method: method,
            headers: headers,
            body: JSON.stringify(body),
            credentials: "include",
        });

        if (!response.ok) {
            Error(`Request failed with status ${response.status}`);
        }

        return await response.json();
    } catch (e) {
        console.log(e);
        throw e;
    }
}

export const getMeService = async () => await getFromEndpoint({
    endpoint: "/me", method: "GET", headers: {
        "Content-Type": "application/json",
        withCredentials: true
    }
})

export const signInWithCredentialsService = async ({email, password}: {
    email: string,
    password: string
}) => await getFromEndpoint({
    endpoint: "/authentication/sign_in", method: "POST", headers: {
        "Content-Type": "application/json",
        withCredentials: true
    }, body: {email, password}
})

export const signInWithOauthService = async ({provider}: { provider: string }) => await getFromEndpoint({
    endpoint: `/authentication/sign_in/provider/${provider}`, method: "GET", headers: {
        "Content-Type": "application/json",
        withCredentials: true
    }
})

export const signOutService = async () => await getFromEndpoint({
    endpoint: "/authentication/sign_out", method: "POST", headers: {
        "Content-Type": "application/json",
        withCredentials: true
    }
})

export const signUpWithCredentialsService = async ({name, email, password}: {
    name: string,
    email: string,
    password: string
}) => await getFromEndpoint({
    endpoint: "/authentication/sign_up", method: "POST", headers: {
        "Content-Type": "application/json",
        withCredentials: true
    }, body: {name, email, password}
})