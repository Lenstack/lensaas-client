import {LayoutAuthentication} from "@/layouts";
import {TabList} from "@/components";
import {useAuth, useForm} from "@/hooks";
import {useState} from "react";
import {useRouter} from "next/router";

export default function AuthenticationPage() {
    const tabs = [
        {
            title: "Credentials",
            content: <Credentials/>
        },
        {
            title: "OAuth 2.0",
            content: <OAuth/>
        },
        {
            title: "Magic Link",
            content: <MagicLink/>
        }
    ]

    return (
        <LayoutAuthentication>
            <section className="flex flex-col justify-center items-center align-middle gap-12">
                <div className="text-center">
                    <h1 className="text-3xl break-words">
                        Choose your authentication method below to sign in
                    </h1>
                </div>
                <TabList tabs={tabs}/>
            </section>
        </LayoutAuthentication>
    )
}


const Credentials = () => {
    const {action} = useAuth();
    const [credentialStep, setCredentialStep] = useState(0);
    const [hasAccount, setHasAccount] = useState(false);

    const {handleBlur, handleChange, handleSubmit} = useForm({
        email: '',
        password: '',
    }, {
        name: (value: string) => {
            if (!value) return "Name is required";
        },
        email: (value: string) => {
            if (!value) return "Email is required";
            if (!/\S+@\S+\.\S+/.test(value)) return "Email address is invalid";
        },
        password: (value: string) => {
            if (!value) return "Password is required";
            if (value.length < 6) return "Password must be at least 6 characters";
        },
    }, (values: any) => {
        // Handle sign-in logic
    })


    const handleSignIn = (e: any) => {
        e.preventDefault();

        if (credentialStep === 0) {
            // Check if the user has an account based on their email address
            const hasAccount = checkAccountExists("email");
            setHasAccount(hasAccount);
            setCredentialStep(1);
        }
    };

    const handleSignUp = async (e: any) => {
        e.preventDefault();

        const response = await action.signUp({"name": "John Doe", "email": "email", "password": "password"});
        console.log(response);
        // Handle sign-up logic
    };

    const checkAccountExists = (email: string) => {
        // Replace with your own logic to check if the user has an account
        return email !== '';
    };

    return (
        <div>
            <div className="flex flex-col gap-6 pb-6">
                <p className="text-xl"> Sign in or sign up with your credentials </p>
            </div>
            {
                credentialStep === 0 ? (
                    <form onSubmit={handleSignIn} className="flex flex-col gap-6">
                        <div className="space-y-6">
                            <label htmlFor="email">Your email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                className="focus:outline-none w-full p-3 rounded-2xl bg-white dark:bg-[#2A2A2A] placeholder:text-black dark:placeholder:text-white"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div className="space-y-6">
                            <button
                                className="border border-[#151515] dark:border-[#393939] px-6 py-3 rounded-2xl w-full"
                                type="submit"
                            >
                                next &rarr;
                            </button>
                        </div>
                    </form>
                ) : credentialStep === 1 && hasAccount ? (
                    <form onSubmit={handleSignIn} className="flex flex-col gap-6">
                        <div className="space-y-6">
                            <label htmlFor="password">Your password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                className="focus:outline-none w-full p-3 rounded-2xl bg-white dark:bg-[#2A2A2A] placeholder:text-black dark:placeholder:text-white"

                            />
                        </div>
                        <div className="space-y-6">
                            <button
                                className="border border-[#151515] dark:border-[#393939] px-6 py-3 rounded-2xl w-full"
                                type="submit"
                            >
                                Sign in with credentials
                            </button>
                            <button
                                className="border border-[#151515] dark:border-[#393939] px-6 py-3 rounded-2xl w-full"
                                type="button"
                                onClick={() => setCredentialStep(0)}
                            >
                                &larr; back
                            </button>
                        </div>
                    </form>
                ) : (
                    <form onSubmit={handleSignUp} className="flex flex-col gap-6">
                        <div className="space-y-6">
                            <label htmlFor="password">Your name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                className="focus:outline-none w-full p-3 rounded-2xl bg-white dark:bg-[#2A2A2A] placeholder:text-black dark:placeholder:text-white"

                            />
                        </div>
                        <div className="space-y-6">
                            <label htmlFor="password">Your email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                className="focus:outline-none w-full p-3 rounded-2xl bg-white dark:bg-[#2A2A2A] placeholder:text-black dark:placeholder:text-white"
                            />
                        </div>
                        <div className="space-y-6">
                            <label htmlFor="password">Your password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                className="focus:outline-none w-full p-3 rounded-2xl bg-white dark:bg-[#2A2A2A] placeholder:text-black dark:placeholder:text-white"
                            />
                        </div>
                        <div className="space-y-6">
                            <button
                                className="border border-[#151515] dark:border-[#393939] px-6 py-3 rounded-2xl w-full"
                                type="submit"
                            >
                                Sign up with credentials
                            </button>
                            <button
                                className="border border-[#151515] dark:border-[#393939] px-6 py-3 rounded-2xl w-full"
                                type="button"
                                onClick={() => setCredentialStep(0)}
                            >
                                &larr; back
                            </button>
                        </div>
                    </form>
                )
            }
        </div>
    );
};

const OAuth = () => {
    const router = useRouter();
    const {action} = useAuth();
    const handleOAuthGoogle = async (e: any) => {
        const {redirect_url} = await action.signIn({type: "oauth", action: {oauth: "google"}})
        await router.replace(redirect_url)
    }

    const handleOAuthFacebook = async (e: any) => {
        const {redirect_url} = await action.signIn({type: "oauth", action: {oauth: "facebook"}})
        await router.replace(redirect_url)
    }

    const handleOAuthDiscord = async (e: any) => {
        const {redirect_url} = await action.signIn({type: "oauth", action: {oauth: "discord"}})
        await router.replace(redirect_url)
    }

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6 pb-6">
                <p className="text-xl"> Choose your social provider below to sign in </p>
            </div>
            <button className="border border-[#151515] dark:border-[#393939] px-6 py-3 rounded-2xl"
                    onClick={handleOAuthGoogle}>
                Sign in with Google
            </button>
            <button className="border border-[#151515] dark:border-[#393939] px-6 py-3 rounded-2xl"
                    onClick={handleOAuthFacebook}>
                Sign in with Facebook
            </button>
            <button className="border border-[#151515] dark:border-[#393939] px-6 py-3 rounded-2xl"
                    onClick={handleOAuthDiscord}>
                Sign in with Discord
            </button>
        </div>
    )
}

const MagicLink = () => {
    const handleSendMagicLink = (e: any) => {
        e.preventDefault()
        console.log("Send magic link")
    }

    return (
        <div>
            <div className="flex flex-col gap-6 pb-6">
                <p className="text-xl"> Your email below to receive a magic link </p>
            </div>
            <form onSubmit={handleSendMagicLink} className="flex flex-col gap-6">
                <div className="space-y-6">
                    <label htmlFor="email">Your email</label>
                    <input type="email" id="email" name="email" placeholder="Email"
                           className="focus:outline-none w-full p-3 rounded-2xl bg-white dark:bg-[#2A2A2A] placeholder:text-black dark:placeholder:text-white"/>
                </div>
                <div>
                    <button className="border border-[#151515] dark:border-[#393939] px-6 py-3 rounded-2xl w-full"
                            type="submit">
                        Send Magic Link
                    </button>
                </div>
            </form>
        </div>
    )
}