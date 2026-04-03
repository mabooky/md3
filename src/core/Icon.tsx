'use client';

import { useM3Context } from "@m3/providers/M3Provider";
import clsx from "clsx";
import { ComponentProps } from "react";

export type IconProps = ComponentProps<'span'>;

export function Icon({
    ref,
    className,
    "aria-hidden": ariaHidden,
    children,
    ...props
}: IconProps) {
    const context = useM3Context();

    return (
        <span
            ref={ref}
            className={clsx(`md3-icon material-symbols-${context.iconStyle}`, className)}
            aria-hidden={ariaHidden ?? true}
            {...props}>
            {children}
        </span>
    )
}