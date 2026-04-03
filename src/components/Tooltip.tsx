import { ComponentProps } from "react";
import { cn } from "@m3/utils/cn";
import { Container } from "../core/Container";

interface TooltipProps extends ComponentProps<"div"> {
    variant?: 'plain' | 'rich';
}

export function Tooltip({
    ref,
    className,
    variant = 'plain',
    children,
    ...props
}: TooltipProps) {
    const variantStyles = {
        plain: `w-fit h-[24px] px-[8px] bg-inverse-surface rounded-xs typescale-label-large text-inverse-on-surface`,
        rich: `bg-surface-container rounded-md`,
    };

    return (
        <Container
            ref={ref}
            className={cn(
                variantStyles[variant],
                className
            )}
            {...props}>
            {children}
        </Container>
    )   
}