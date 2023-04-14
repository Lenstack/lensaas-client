import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {AuthProvider} from "@/contexts";
import Head from 'next/head';

export default function App({Component, pageProps}: AppProps) {
    return (
        <AuthProvider>
            <Head>
                <title>Saas</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <meta name="theme-color" content="#161616"/>
                <meta name="description" content="Dashboard"/>
            </Head>
            <Component {...pageProps} />
        </AuthProvider>
    )
}