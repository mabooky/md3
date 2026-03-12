import { ComponentProps } from "react";
import { cn } from "@m3/utils/cn";

export type StatefulContainerProps = ComponentProps<"div"> & {
    usesRipple?: boolean;
}

export function StatefulContainer({
    ref,
    className,
    usesRipple = false,
    children,
    ...props 
}: StatefulContainerProps) {
    return (
        <div
            ref={ref}
            className={cn(
                `m3-stateful-container`,
                !usesRipple && 'm3-after-state-layer',
                className
            )}
            {...props}>

            {children}

        </div>
    )
}