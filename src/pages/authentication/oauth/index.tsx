import Link from "next/link";
import Image from "next/image";
import LogoSvg from "@/assets/logo-light.svg";

export default function OAuthPage() {

    return (
        <main className="min-h-screen max-w-6xl mx-auto p-6">
            <header className="flex justify-between items-center h-24 py-3">
                <Link href="/">
                    <Image src={LogoSvg} alt="Logo" width={50} height={50}/>
                </Link>
            </header>
            <section className="flex flex-col justify-center items-center gap-12 py-24">
                <button>
                    Sign in with Google
                </button>
                <button>
                    Sign in with Facebook
                </button>
                <button>
                    Sign in with Twitter
                </button>


            </section>
        </main>
    )
}