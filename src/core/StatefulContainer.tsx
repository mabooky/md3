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
                `after:content-[''] after:absolute after:inset-0 after:size-full after:rounded-[inherit]
                after:opacity-0 after:pointer-events-none after:bg-current
                group-hover:after:opacity-8 group-focus-visible:after:opacity-10 group-active:after:opacity-10`,
                className
            )}
            {...props}>

            {children}

        </div>
    )
}