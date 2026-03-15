'use client';

import { Icon } from "@m3/core/Icon";
import { StatefulContainer } from "@m3/core/StatefulContainer";
import { TouchTarget, TouchTargetProps } from "@m3/core/TouchTarget";
import { cn } from "@m3/utils/cn";
import { ComponentProps, createContext, MouseEvent, useContext } from "react";

/* NavigationBarContext 정의 -------------------------------------------------- */

type NavigationBarContextValue = {
    itemLayout: NavigationBarProps['itemLayout'];
    value: string;
    onChange?: (value: string) => void;
    onItemReselect?: (value: string) => void;
}

const NavigationBarContext = createContext<NavigationBarContextValue | null>(null);

function useNavigationBarContext() {
    const context = useContext(NavigationBarContext);
    
    if (!context) {
        throw new Error("useNavigationBarContext 함수는 NavigationBar 컴포넌트 내부에서만 사용되어야 합니다.");
    }

    return context;
}



/* NavigationBarRoot -------------------------------------------------------- */

type NavigationBarProps = Omit<ComponentProps<"nav">, "onChange"> & {
    itemLayout?: 'vertical' | 'horizontal';
    value: string,
    onChange?: (value: string) => void;
    onItemReselect?: (value: string) => void;
};

export function NavigationBarRoot({
    ref,
    className,
    itemLayout = 'vertical',
    value,
    onChange,
    onItemReselect,
    children,
    ...props
}: NavigationBarProps) {
    return (
        <nav
            ref={ref}
            className={cn('m3-navigation-bar', className)}
            data-item-layout={itemLayout}
            {...props}>

            <NavigationBarContext.Provider
                value={{ itemLayout, value, onChange, onItemReselect }}>

                {children}

            </NavigationBarContext.Provider>

        </nav>
    );
}



/* NavigationBarItem -------------------------------------------------------- */

export type NavigationBarItemProps = TouchTargetProps & {
    icon: string;
    value: string;
    label?: string;
}

export function NavigationBarItem({
    ref,
    className,
    icon,
    value,
    label,
    children,
    ...props
}: NavigationBarItemProps) {
    const ctx = useNavigationBarContext();

    return (
        <TouchTarget
            ref={ref}
            className={cn('m3-navigation-bar-item', className)}
            data-active={value === ctx.value}
            onClick={(e: MouseEvent<HTMLButtonElement>) => {
                if (value === ctx.value) {
                    ctx.onItemReselect?.(value);
                } else {
                    ctx.onChange?.(value);
                }

                props.onClick?.(e);
            }}
            
            {...props}>

            <StatefulContainer
                className="m3-navigation-bar-item__active-indicator">

                <Icon className="m3-navigation-bar-item__icon">{icon}</Icon>

                {ctx.itemLayout === 'horizontal' && 
                    <span className="m3-navigation-bar-item__label">{label ?? value}</span>}

            </StatefulContainer>

            {ctx.itemLayout === 'vertical' && 
                <span className="m3-navigation-bar-item__label">{label ?? value}</span>}
            
        </TouchTarget>
    );
}