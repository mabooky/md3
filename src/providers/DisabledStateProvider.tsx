import { createContext, useContext } from "react";

type DisabledStateContextType = {

}

const DisabledStateContext = createContext<DisabledStateContextType | null>(null);

export function useDisabledStateContext() {
    const context = useContext(DisabledStateContext);
}