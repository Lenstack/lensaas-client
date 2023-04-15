export const HOME_HEADER_ROUTES: { name: string, href: string }[] = [
    {name: "Home", href: "/"},
    {name: "How Works", href: "/how-works"},
    {name: "Pricing", href: "/pricing"},
    {name: "Resources", href: "/resources"},
    {name: "Faq", href: "/faq"},
    {name: "Docs", href: "/docs"},
]

export const HOME_FOOTER_ROUTES: { name: string, href: string }[] = [
    {name: "Contact", href: "/contact"},
    {name: "Terms", href: "/terms"},
    {name: "Privacy", href: "/privacy"},
]

export const AUTH_ROUTES: { title: string, subtitle: string, description?: string, href: string }[] = [
    {title: "Credentials", subtitle: "(email, password)", description: "", href: "/authentication/credentials"},
    {title: "Oauth Providers", subtitle: "(google, facebook, discord)", description: "", href: "/authentication/oauth"},
    {title: "Magic Link", subtitle: "(email - link)", description: "", href: "/authentication/magic-links"},
]

export const DASHBOARD_ROUTES: { name: string, href: string }[] = [
    {name: "Sign Out", href: "/"}
]