import Link from "next/link";

interface INavigationProps {
    items: { name: string, href: string }[],
    className?: string
}

export const Navigation = ({items, ...restProps}: INavigationProps) => {
    return (
        <nav {...restProps}>
            {
                items.map((item, index) => (
                    <Link href={item.href} key={index}>{item.name}</Link>
                ))
            }
        </nav>
    )
}