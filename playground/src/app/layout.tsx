import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { M3Provider } from "@m3/providers/M3Provider";
import { AppBar, Pane } from "@m3/index";
import AppNavigationBar from "./AppNavigationBar";

const roboto = Roboto({
    subsets: ["latin"],
    variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "MD3 Playground"
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html 
            lang="ko" 
            className={`${roboto.variable} w-full h-full`}
            suppressHydrationWarning>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            </head>        
            <body className="w-full h-full flex flex-col">
                <M3Provider>
                    <Pane className="relative w-full h-full flex-1">
                        <AppBar className="absolute top-0">
                            <AppBar.LeadingButton>menu</AppBar.LeadingButton>
                            <AppBar.Headline>MD3 라이브러리 카탈로그</AppBar.Headline>
                            <AppBar.TrailingButton>search</AppBar.TrailingButton>
                            <AppBar.TrailingButton>dark_mode</AppBar.TrailingButton>
                        </AppBar>
                        {/* 라우팅된 페이지가 여기에 렌더링됨! */}
                        <div className="h-16" />
                        {children}
                    </Pane>
                </M3Provider>
            </body>
        </html>
    );
}
