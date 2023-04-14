interface IButtonProps {
    children: string;
}

export const Button = ({children, ...restProps}: IButtonProps) => {
    return (
        <button {...restProps}>
            {children}
        </button>
    )
}