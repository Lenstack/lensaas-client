import {createContext, ReactNode, useEffect, useState} from "react";
import {
    signInWithCredentialsService,
    signInWithOauthService,
    signOutService,
    signUpWithCredentialsService
} from "@/services";

interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
}
interface Auth {
    user: User | null;
    loading: boolean;
    action: {
        signIn: ({}: Provider) => Promise<any>;
        signOut: () => Promise<any>;
        signUp: ({name, email, password}: { name: string, email: string, password: string }) => Promise<any>;
    }
}
interface Provider {
    type: "credentials" | "oauth";
    action: {
        credentials?: { email: string; password: string },
        oauth?: "google" | "facebook" | "discord" | "github" | "twitter" | "apple" | "microsoft";
    }
}
export const AuthContext = createContext({
    user: null,
    loading: true,
    action: {
        signIn: async ({}: Provider) => {
        },
        signOut: async () => {
        },
        signUp: async ({}: { name: string, email: string, password: string }) => {
        },
    }
} as Auth);
// TODO: Context for authentication with providers (Credentials, OAuth2, etc.)
export const AuthProvider = ({children}: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const signIn = async ({type, action}: Provider) => {
        // TODO: If provider is credentials, then call signInWithCredentials otherwise call signUpWithOauth
        if (type === "credentials") {
            if (!action.credentials?.email || !action?.credentials?.password) {
                throw new Error("Email and password are required for credentials authentication");
            }

            return await signInWithCredentialsService({
                email: action.credentials.email,
                password: action.credentials.password
            });
        }

        if (type === "oauth") {
            if (!action?.oauth) {
                throw new Error("Provider is required for oauth authentication");
            }

            return await signInWithOauthService({
                provider: action?.oauth
            });
        }

        throw new Error("Provider type is not supported");
    }
    const signUp = async ({name, email, password}: { name: string, email: string, password: string }) => {
        return await signUpWithCredentialsService({
            name,
            email,
            password
        });
    }
    const signOut = async () => {
        const response = await signOutService();
        setUser(null);
        return response;
    }

    useEffect(() => {
        return () => {
            setUser(null);
            setLoading(false);
        };
    }, []);

    return (
        <AuthContext.Provider value={{user, loading, action: {signIn, signUp, signOut}} as Auth}>
            {children}
        </AuthContext.Provider>
    )
}