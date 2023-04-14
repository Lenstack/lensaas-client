import Link from "next/link";
import Image from "next/image";
import LogoLightSvg from "@/assets/logo-light.svg";
import {Navigation} from "@/components";
import {HOME_HEADER_ROUTES} from "@/constants";

export default function PricingPage() {
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
        </main>
    )
}