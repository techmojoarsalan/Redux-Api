import React, { createContext, useContext, useReducer } from 'react'
let initialState = 0;
const reducer = (state, action) => {
    switch (action.type) {
        case "inc":
            return state + 1;
        case "dec":
            return state - 1;
        case "rest":
            return 0;
        default:
            return state;
    }
};

export const CounterContext = createContext();
function Context({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState);
    return <CounterContext.Provider value={{ state, dispatch }}>{children}</CounterContext.Provider>
}

export default Context

export function useCounterContext() {
    return useContext(CounterContext)
}