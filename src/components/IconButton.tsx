import { StatefulContainer } from "@m3/core/StatefulContainer";
import { cn } from "@m3/utils/cn";
import { TouchTarget, TouchTargetProps } from "@m3/core/TouchTarget";
import { Icon } from "@m3/core/Icon";
import { StateLayer } from "@m3/core/StateLayer";

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
            <div
                className={cn('m3-icon-button__container', className)}
                data-size={size}
                data-shape={shape}
                data-width={width}
                data-variant={variant} />
            <Icon className="m3-icon-button__icon">{children}</Icon>
            <StateLayer />
        </TouchTarget>
    );
}