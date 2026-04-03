'use client';

import { StateLayer } from "@m3/core/StateLayer";
import { TouchTarget, TouchTargetProps } from "@m3/core/TouchTarget";
import clsx from "clsx";

export type ButtonProps = TouchTargetProps & {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    shape?: 'round' | 'square';
    variant?: 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text';
    selected?: boolean | null;
}

export function Button({
    ref,
    className,
    size = 'sm',
    shape = 'round',
    variant = 'filled',
    selected = null,
    children,
    ...props
}: ButtonProps) {
    return (
        <TouchTarget
            ref={ref}
            className={clsx('md3-button', className)}
            data-size={size}
            data-shape={shape}
            data-variant={variant}
            data-selected={selected}
            {...props}>

            <div className={clsx('md3-button__container')}>
                {children}
            </div>

            <StateLayer className="md3-button__state-layer" />

        </TouchTarget>
    )
}