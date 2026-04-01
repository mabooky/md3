import { AppBarHeadline, AppBarLeadingButton, AppBarRoot, AppBarTrailingButton } from "./components/AppBar"
import { NavigationBarRoot, NavigationBarItem } from "./components/NavigationBar"

export * from "./core/Container"
export * from "./core/Icon"
export * from "./core/InteractiveComponent"
export * from "./core/StatefulContainer"
export * from "./core/StateLayer"
export * from "./core/TouchTarget"

export const AppBar = Object.assign(AppBarRoot, {
    LeadingButton: AppBarLeadingButton,
    TrailingButton: AppBarTrailingButton,
    Headline: AppBarHeadline,
})
export * from "./components/Button"
export * from "./components/ButtonGroup"
export * from "./components/Card"
export * from "./components/FAB"
export * from "./components/IconButton"
export const NavigationBar = Object.assign(NavigationBarRoot, {
    Item: NavigationBarItem,
})
export * from "./components/Pane"
export * from "./components/Tooltip"

export * from "./providers/M3Provider"

export { cn as tailoredMerge } from "./utils/cn"