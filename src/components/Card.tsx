import {ReactNode} from "react";

interface ICardProps {
    className?: string;
    children?: ReactNode;
}

export const Card = ({children, ...restProps}: ICardProps) => {
    return (
        <article {...restProps}>
            {children}
        </article>
    )
}