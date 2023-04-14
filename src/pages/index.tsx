import Link from "next/link";
import {Navigation} from "@/components";
import {HOME_HEADER_ROUTES} from "@/constants";
import Image from "next/image";
import LogoLightSvg from "@/assets/logo-light.svg";

export default function HomePage() {
    return (
        <main className="min-h-screen max-w-6xl mx-auto p-6">
            <header className="flex justify-between items-center h-24 py-3">
                <Link href="/">
                    <Image src={LogoLightSvg} alt="Logo" width={50} height={50}/>
                </Link>
                <Navigation items={HOME_HEADER_ROUTES}
                            className="hidden lg:flex space-x-6 border border-[#151515] dark:border-[#393939] p-2.5 rounded-2xl"/>
                <Link href={"/authentication"}>
                    Connect
                </Link>
            </header>
            <section className="py-20 text-center space-y-12">
                <div className="space-y-6">
                    <h1 className="text-6xl">
                        The most powerful <span className="pl-2 bg-gradient-to-r from-[#eb7d55]">template</span> for
                        your
                        next project.
                    </h1>
                    <p className="text-2xl text-primary-light dark:text-primary-dark">
                        Created with modern technologies like Next.js, TailwindCSS, <span
                        className="pl-2 bg-gradient-to-r from-[#5b4eed]">Golang</span> and more...
                    </p>
                </div>
                <div className="space-x-6">
                    <button className="bg-white text-[#111111] px-6 py-3 rounded-2xl">
                        Try it now
                    </button>
                    <button className="border border-[#151515] dark:border-[#393939] px-6 py-3 rounded-2xl">
                        Watch demo
                    </button>
                </div>
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-12">
                    <div className="space-y-3">
                        <h2 className="text-3xl">
                            Make your life easier with this template.
                        </h2>
                        <p className="text-primary-light dark:text-primary-dark">
                            Everything you need to build your next project is included in this template
                        </p>
                    </div>
                    <div className="grid grid-cols-2 items-center justify-items-center">
                        <input placeholder="Enter your email"
                               className="focus:outline-none w-full p-3 rounded-2xl bg-white dark:bg-[#2A2A2A] placeholder:text-black dark:placeholder:text-white"/>

                        <Link href="/authentication" className="underline">
                            Join the waitlist
                        </Link>
                    </div>
                    <div className="flex justify-center items-center">
                        <p>
                            <span className="text-3xl">4.8</span>
                            <span className="text-2xl">⭐️</span>
                            and over <span className="text-2xl">5k</span> reviews by our customers loves this template.
                        </p>
                        <p>
                            More <span className="text-2xl">100+</span> hours of development work saved with this
                            template.
                        </p>
                    </div>
                </div>
                <div>
                    Dashboard photo
                </div>
            </section>
        </main>
    )
}