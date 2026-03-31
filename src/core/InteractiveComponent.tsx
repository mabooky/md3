import { cn } from "@m3/utils/cn";
import { ComponentProps } from "react";

export type InteractiveComponentProps = ComponentProps<'button'> & {
    containerClassName?: string;
    minimumTouchTarget?: 'box' | 'hitbox';
}

export function InteractiveComponent({
    className,
    containerClassName,
    minimumTouchTarget = 'box',
    children,
    ...props
}: InteractiveComponentProps) {
    return (
        <button
            className={cn('md3-interactive-component', className)}
            data-minimum-touch-target={minimumTouchTarget}
            {...props}>

            <div
                className={cn('md3-interactive-component__container', containerClassName)}>

                {children}

            </div>

        </button>
    )
}