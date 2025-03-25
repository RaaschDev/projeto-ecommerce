import { ButtonHTMLAttributes } from 'react'
import style from './button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "danger";
    fullwidth?: boolean;
}

export function Button({
    children,
    variant = "primary",
    fullwidth,
    className,
    ...props
}: ButtonProps) {
    return (
        <button className={`
            ${style.button} 
            ${style[variant]} 
            ${fullwidth ? style.fullwidth : ""} 
            ${className ?? ""}`}
            {...props}>
                {children}
        </button>
    )
}