import {LayoutAuthentication} from "@/layouts";
import {TabList} from "@/components";
import {useAuth} from "@/hooks";

export default function AuthenticationPage() {
    const tabs = [
        {
            title: "Credentials (Email & Password)",
            content: <Credentials/>
        },
        {
            title: "OAuth 2.0 (Google, Facebook, Discord)",
            content: <OAuth/>
        },
        {
            title: "Magic Link (Email)",
            content: <MagicLink/>
        }
    ]

    return (
        <LayoutAuthentication>
            <section className="flex flex-col justify-center items-center align-middle text-center gap-12">
                <div>
                    <h1 className="text-3xl">
                        Choose your authentication method below to sign in
                    </h1>
                    <p>
                        You can use your credentials, Google OAuth 2.0 or Magic Link
                    </p>
                </div>
                <TabList tabs={tabs}/>
            </section>
        </LayoutAuthentication>
    )
}


const Credentials = () => {
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Password"/>
                </div>
                <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl">
                        Sign in
                    </button>
                </div>
            </form>
        </div>
    )
}

const OAuth = () => {
    const {action} = useAuth();
    return (
        <div className="flex flex-col gap-6">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl"
                    onClick={() => action.signIn({type: "oauth", action: {oauth: "google"}})}>
                Sign in with Google
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl"
                    onClick={() => action.signIn({type: "oauth", action: {oauth: "facebook"}})}>
                Sign in with Facebook
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl"
                    onClick={() => action.signIn({type: "oauth", action: {oauth: "discord"}})}>
                Sign in with Discord
            </button>
        </div>
    )
}

const MagicLink = () => {
    return (
        <div>
            <h1>Magic Link</h1>
            <form>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email"/>
                </div>
                <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl">
                        Send Magic Link
                    </button>
                </div>
            </form>
        </div>
    )
}