import { ComponentProps } from "react";
import { cn } from "@m3/utils/cn";

export type StatefulContainerProps = ComponentProps<"div">;

export function StatefulContainer({
    ref,
    className,
    children,
    ...props 
}: StatefulContainerProps) {
    return (
        <div
            ref={ref}
            className={cn(
                `relative group-focus-visible:outline-3 group-focus-visible:outline-offset-2
                group-focus-visible:outline-secondary`,
                'm3-after-state-layer',
                className
            )}
            {...props}>

            {children}

        </div>
    )
}