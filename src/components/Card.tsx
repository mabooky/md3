import { cn } from "@m3/utils/cn";
import { TouchTarget, TouchTargetProps } from "@m3/core/TouchTarget";
import { StatefulContainer } from "@m3/core/StatefulContainer";
import { ComponentProps, Ref } from "react";
import { InteractiveComponent, InteractiveComponentProps } from "@m3/core/InteractiveComponent";

type NonActionableCardProps = ComponentProps<'div'> & {
    actionable?: false;
}

type ActionableCardProps = InteractiveComponentProps & {
    actionable: true;
}

type CardProps = (NonActionableCardProps | ActionableCardProps) & {
    actionable?: boolean;
    variant?: "elevated" | "filled" | "outlined";   
}

export function Card(props: CardProps) {
    if (props.actionable) {
        const { ref, className, containerClassName, variant, children, ...rest } = props;
        return (
            <InteractiveComponent
                ref={ref}
                className={cn("m3-card", className)}
                containerClassName={cn("m3-card__container", containerClassName)}
                data-variant={variant}
                {...rest}>
                
                {children}

            </InteractiveComponent>
        )
    }
    else {
        const { ref, className, variant, children, ...rest } = props;
        return (
            <div
                ref={ref}
                className={cn("m3-card", className)}
                data-variant={variant}
                {...rest}>
                
                {children}

            </div>
        )
    }
}