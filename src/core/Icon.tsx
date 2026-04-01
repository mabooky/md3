'use client';

import { useM3Context } from "@m3/providers/M3Provider";
import { cn } from "@m3/utils/cn";
import { ComponentProps } from "react";

type IconProps = ComponentProps<'span'>;

export function Icon({
    ref,
    className,
    children,
    ...props
}: IconProps) {
    const context = useM3Context();

    return (
        <span
            ref={ref}
            className={cn(`material-symbols-${context.iconStyle}`, className)}
            {...props}>
            {children}
        </span>
    )
}