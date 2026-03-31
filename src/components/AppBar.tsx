'use client';

import { cn } from "@m3/utils/cn";
import { Container, ContainerProps } from "@m3/core/Container";
import { IconButton, IconButtonProps } from "./IconButton";
import { ComponentProps, createContext, useContext } from "react";

/* AppBarContext 정의 --------------------------------------------------------- */

type AppBarContextValue = {
    variant: NonNullable<AppBarProps['variant']>;
}

const AppBarContext = createContext<AppBarContextValue>({ variant: 'small' });

function useAppBarContext() {
    return useContext(AppBarContext);
}



/* AppBarRoot --------------------------------------------------------------- */

export type AppBarProps = ContainerProps & {
    variant?: 'search' | 'small' | 'medium-flexible' | 'large-flexible'
}

export function AppBarRoot({
    ref,
    className,
    variant = 'small',
    children,
    ...props
}: AppBarProps) {
    const variantStyles = {
        'search': `h-16 items-center`,
        'small': `h-16 items-center`,
        'medium-flexible': `h-28 items-start`,
        'large-flexible': `h-30 items-start`,
    }

    return (
        <Container
            ref={ref}
            className={cn(
                `w-full bg-surface flex px-1`,
                variantStyles[variant],
                className
            )}
            {...props}>
            <AppBarContext.Provider value={{ variant }}>
                {children}
            </AppBarContext.Provider>
        </Container>
    )
}



/* AppBarLeadingButton ------------------------------------------------------ */

export type AppBarLeadingButtonProps = IconButtonProps;

export function AppBarLeadingButton({
    ref,
    className,
    children,
    ...props
}: AppBarLeadingButtonProps) {
    const variant = useAppBarContext().variant;

    return (
        <IconButton
            ref={ref}
            variant="standard"
            size="sm"
            className={cn(
                ``,
                className
            )}
            {...props}>
            {children}
        </IconButton>
    )
}



/* AppBarTrailingButton ----------------------------------------------------- */

export type AppBarTrailingButtonProps = IconButtonProps;

export function AppBarTrailingButton({
    ref,
    className,
    children,
    ...props
}: AppBarTrailingButtonProps) {
    return (
        <IconButton
            ref={ref}
            variant="standard"
            size="sm"
            className={cn(
                ``,
                className
            )}
            {...props}>
            {children}
        </IconButton>
    )
}



/* AppBarHeadline ----------------------------------------------------------- */

export type AppBarHeadlineProps = ComponentProps<"p">;

export function AppBarHeadline({
    ref,
    className,
    children,
    ...props
}: AppBarHeadlineProps) {
    const variant = useAppBarContext().variant;

    const variantStyles = {
        'search': ``,
        'small': `flex-1 mx-1 typescale-title-large`,
        'medium-flexible': `absolute bottom-3 left-4 typescale-headline-medium`,
        'large-flexible': `absolute bottom-3 left-4 typescale-display-small`,
    }

    return (
        <p
            ref={ref}
            className={cn(
                variantStyles[variant],
                className,
            )}
            {...props}>
            {children}
        </p>
    )
}