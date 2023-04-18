import Link from "next/link";
import Image from "next/image";
import LogoLightSvg from "@/assets/logo-light.svg";
import {Navigation} from "@/components/Navigation";
import {DASHBOARD_ROUTES, HOME_HEADER_ROUTES} from "@/constants";
import {ReactNode} from "react";

export const LayoutLanding = ({children}: { children: ReactNode }) => {
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
            {children}
        </main>
    )
}

export const LayoutAuthentication = ({children}: { children: ReactNode }) => {
    return (
        <main className="min-h-screen max-w-6xl mx-auto p-6">
            <header className="flex items-center h-24 py-3 space-x-6">
                <Link href="/">
                    <Image src={LogoLightSvg} alt="Logo" width={50} height={50}/>
                </Link>
                <Link href="/" className="flex gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                    </svg>
                    Go back
                </Link>
            </header>
            {children}
        </main>
    )
}

export const LayoutDashboard = ({children}: { children: ReactNode }) => {
    return (
        <main className="min-h-screen max-w-6xl mx-auto p-6">
            <header
                className="flex justify-between items-center h-24 py-3 border-b border-[#151515] dark:border-[#393939] overflow-auto">
                <div className="flex items-center gap-6">
                    <Link href="/">
                        <Image src={LogoLightSvg} alt="Logo" width={50} height={50}/>
                    </Link>
                    <Navigation items={DASHBOARD_ROUTES} className="space-x-6"/>
                </div>
                <Link href={"/authentication"}>
                    Sign out
                </Link>
            </header>
            {children}
        </main>
    )
}