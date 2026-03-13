'use client';

import { createContext, useContext } from "react";
import { ThemeProvider } from "next-themes";

type M3ContextType = {
    iconStyle: 'outlined' | 'rounded' | 'sharp';
    motionScheme: 'standard' | 'expressive';
};

// createContext의 기본값을 null로 설정해도 useM3Context의 반환 타입이 non-null로 추론됨
const M3Context = createContext<M3ContextType | null>(null);

export function useM3Context() {
    const context = useContext(M3Context);

    if (!context) {
        throw new Error("useM3Context 함수는 M3Provider 컴포넌트 내부에서만 사용되어야 합니다.");
    }

    return context;
}

export function M3Provider({
    iconStyle = 'outlined',
    motionScheme = 'expressive',
    children
}: Readonly<{
    iconStyle?: 'outlined' | 'rounded' | 'sharp';
    motionScheme?: 'standard' | 'expressive';
    children?: React.ReactNode;
}>) {
    return (
        <M3Context value={{ iconStyle, motionScheme }}>

            <ThemeProvider
                themes={['system', 'light', 'light-medium-contrast', 'light-high-contrast', 'dark', 'dark-medium-contrast', 'dark-high-contrast']}
                enableSystem={true}
                defaultTheme="system"
                disableTransitionOnChange>

                {children}

            </ThemeProvider>

        </M3Context>
    );
}