import Link from "next/link";
import Image from "next/image";
import LogoSvg from "@/assets/logo-light.svg";
import {AUTH_ROUTES} from "@/constants";
import {Card} from "@/components";

export default function AuthenticationPage() {
    return (
        <main className="min-h-screen max-w-6xl mx-auto p-6">
            <header className="flex justify-between items-center h-24 py-3">
                <Link href="/">
                    <Image src={LogoSvg} alt="Logo" width={50} height={50}/>
                </Link>
            </header>
            <section className="flex flex-col justify-center items-center gap-12 py-24">
                <h1 className="text-2xl font-bold text-center">Choose your authentication method below to get
                    started</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {
                        AUTH_ROUTES.map((authRoute, index) => (
                            <Link href={authRoute.href} key={index}>
                                <Card title={authRoute.title} subtitle={authRoute.subtitle}
                                      className="p-6 bg-white dark:bg-[#282828] rounded-2xl"/>
                            </Link>
                        ))
                    }
                </div>
            </section>
        </main>
    )
}