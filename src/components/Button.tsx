'use client';

import { Icon, IconProps } from "@m3/core/Icon";
import { StateLayer } from "@m3/core/StateLayer";
import { TouchTarget, TouchTargetProps } from "@m3/core/TouchTarget";
import clsx from "clsx";

/* ------------------------------- ButtonRoot ------------------------------- */
export type ButtonProps = TouchTargetProps & {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    shape?: 'round' | 'square';
    variant?: 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text';
    selected?: boolean | null;
}

export function ButtonRoot({
    ref,
    className,
    size = 'sm',
    shape = 'round',
    variant = 'filled',
    selected = null,
    children,
    ...props
}: ButtonProps) {
    // Text 스타일 버튼의 경우 선택 기능이 존재하지 않음
    if (variant === 'text') {
        selected = null;
        console.warn('[MD3] Button: Text variant에서는 selected 속성을 지원하지 않습니다. 해당 값은 무시됩니다.');
    }

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

/* ------------------------------- ButtonIcon ------------------------------- */
export type ButtonIconProps = IconProps;

export function ButtonIcon({
    ref,
    className,
    children,
    ...props
}: ButtonIconProps) {
    return (
        <Icon
            ref={ref}
            className={clsx('md3-button__icon', className)}
            {...props}>
            {children}
        </Icon>
    );
}