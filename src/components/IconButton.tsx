import { StatefulContainer } from "@m3/core/StatefulContainer";
import { cn } from "@m3/utils/cn";
import { TouchTarget, TouchTargetProps } from "@m3/core/TouchTarget";

export type IconButtonProps = TouchTargetProps & {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    shape?: 'round' | 'square';
    width?: 'default' | 'narrow' | 'wide';
    variant?: 'filled' | 'tonal' | 'outlined' | 'standard';
    selected?: boolean;
}

export function IconButton({
    ref,
    className,
    size = 'sm',
    shape = 'round',
    width = 'default',
    variant = 'filled',
    selected,
    children,
    ...props
}: IconButtonProps) {
    return (
        <TouchTarget
            ref={ref}
            data-selected={selected}
            className="m3-icon-button"
            {...props}>

            <StatefulContainer
                data-size={size}
                data-shape={shape}
                data-width={width}
                data-variant={variant}
                className={cn('m3-icon-button__container', className)}>

                <span className="material-symbols-outlined select-none m3-icon-button__icon">{children}</span>

            </StatefulContainer>

        </TouchTarget>
    );
}