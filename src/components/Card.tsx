import {ReactNode} from "react";
import Link from "next/link";

interface ICardProps {
    title?: string;
    subtitle?: string;
    className?: string;
    children?: ReactNode;
}

export const Card = ({title, subtitle, children, ...restProps}: ICardProps) => {
    return (
        <article {...restProps}>
            {
                title && subtitle && (
                    <section>
                        <h2 className="text-2xl font-bold">{title}</h2>
                        <p className="text-sm">{subtitle}</p>
                    </section>
                )
            }
            {children}
        </article>
    )
}