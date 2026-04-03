'use client';

import { InteractiveComponent, InteractiveComponentProps } from "@m3/core/InteractiveComponent";
import { cn } from "@m3/utils/cn";

export type ButtonProps = InteractiveComponentProps & {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    shape?: 'round' | 'square';
    variant?: 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text';
    selected?: boolean;
}

export function Button({
    ref,
    className,
    containerClassName,
    size = 'md',
    shape = 'round',
    variant = 'elevated',
    selected,
    children,
    ...props
}: ButtonProps) {
    return (
        <InteractiveComponent
            ref={ref}
            className={cn("md3-button", className)}
            containerClassName={cn("md3-button__container", containerClassName)}
            data-size={size}
            data-shape={shape}
            data-variant={variant}
            data-selected={selected}
            {...props}>

            {children}

        </InteractiveComponent>
    )
}