export const HOME_HEADER_ROUTES: { name: string, href: string }[] = [
    {name: "How Works", href: "/how-works"},
    {name: "Pricing", href: "/pricing"},
    {name: "Resources", href: "/resources"},
    {name: "Faq", href: "/faq"},
    {name: "Docs", href: "/docs"},
]

export const HOME_FOOTER_ROUTES: { name: string, href: string }[] = [
    {name: "Contact", href: "/contact"},
]

export const AUTH_ROUTES: { title: string, subtitle: string, href: string }[] = [
    {title: "Credentials", subtitle: "(email, password)", href: "/authentication/credentials"},
    {title: "Oauth Providers", subtitle: "(google, facebook, discord)", href: "/authentication/oauth"},
    {title: "Magic Link", subtitle: "(email - link)", href: "/authentication/magic-links"},
]

export const DASHBOARD_ROUTES: { name: string, href: string }[] = [
    {name: "Sign Out", href: "/"}
]