import { ComponentProps } from "react";
import { cn } from "@m3/utils/cn";

export type StatefulContainerProps = ComponentProps<"div"> & {
    usesRipple?: boolean;
}

/**
 * StatefulContainer 컴포넌트는 인터랙션이 가능한 컴포넌트를 빠르게 구현하도록 돕는 컴포넌트입니다.
 * Material Design 3에서 컴포넌트를 구성하는 세 레이어(Container, State, Content) 중 
 * Container 레이어와 State 레이어를 렌더링하며, 자식 요소로써 Content 레이어를 렌더링합니다.
 * State 레이어의 경우 Hover, Focus, Press, Drag 상태에 따른 스타일링이 자동으로 적용되며,
 * 레이어의 색상으로는 currentcolor(현재 텍스트 색상)가 사용됩니다.
 */
export function StatefulContainer({
    ref,
    className,
    usesRipple = true, // TODO: Ripple 효과 구현
    children,
    ...props 
}: StatefulContainerProps) {
    return (
        <div
            ref={ref}
            className={cn(`m3-stateful-container`, className)}
            {...props}>

            {children}

        </div>
    )
}