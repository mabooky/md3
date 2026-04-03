'use client';

import { ComponentProps } from "react";
import { cn } from "@m3/utils/cn";
import { StatefulContainer, StatefulContainerProps } from "../core/StatefulContainer";
import { SystemColor } from "@m3/types";

interface ButtonProps extends StatefulContainerProps {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    shape?: 'round' | 'square';
    variant?: 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text';
}

export function Button({
    ref,
    className,
    size = 'sm',
    shape = 'round',
    variant = 'filled',
    selected = false,
    disabled = false,
    children,
    ...props
}: ButtonProps) {
    const sizeStyles = {
        xs: `h-var-[32px] px-[12px] rounded-md typescale-label-large active:rounded-sm`,
        sm: `h-var-[40px] px-[16px] rounded-md typescale-label-large active:rounded-sm`,
        md: `h-var-[56px] px-[24px] rounded-lg typescale-title-medium active:rounded-md`,
        lg: `h-var-[96px] px-[48px] rounded-xl typescale-headline-small active:rounded-lg`,
        xl: `h-var-[136px] px-[64px] rounded-xl typescale-headline-large active:rounded-lg`
    };
    /*
        shapeVariantStyles가 없는 이유:
        sizeVariantStyles를 shape가 square라고 가정하여 작성하고, 
        class merging 단계에서 round인 경우 rounded-var-full 속성을 덮어쓰는 방식 사용.
    */
    const variantStyles = {
        elevated: `
            bg-surface-container-low text-primary shadow-elevation-1
            selected:bg-primary selected:text-on-primary
        `,
        filled: `
            bg-primary text-on-primary
            selected:bg-primary selected:text-on-primary
        `,
        tonal: `
            bg-secondary-container text-on-secondary-container
            selected:bg-secondary selected:text-on-secondary
        `,
        outlined: `
            border border-outline-variant text-on-surface-variant
            selected:bg-inverse-surface selected:text-inverse-on-surface
        `,
        text: `text-primary`
    };

    const variantStateLayerColors: Record<string, SystemColor> = {
        elevated: 'primary',
        filled: 'on-primary',
        tonal: 'on-secondary-container',
        outlined: 'on-surface-variant',
        text: 'primary'
    }

    return (
        <StatefulContainer
            ref={ref}
            className={cn(
                `cursor-pointer transition-all duration-100 ease-out`,
                sizeStyles[size],
                shape === 'round' ? 'rounded-var-full' : '',
                variantStyles[variant],
                className
            )}
            stateLayerColor={variantStateLayerColors[variant]}
            selected={selected}
            disabled={disabled}
            {...props}>
            {children}
        </StatefulContainer>
    );
}