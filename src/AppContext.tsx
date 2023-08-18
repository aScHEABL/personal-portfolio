import React, { createContext, useReducer, ReactNode, useState } from "react";

interface State {
    preferedColorScheme: string
}

interface Action {
    type: string;
    payload?: any;
}

interface AppContextProviderProps {
    children: ReactNode;
}

const initialState:State = {
    preferedColorScheme: ""
}

const AppContext = createContext<{
state: State;
dispatch: React.Dispatch<Action>;
}>({
state: initialState,
dispatch: () => null,
});
  

const reducer = (state: State, action:Action) => {
    switch (action.type) {
        case "UPDATE_COLOR_SCHEME":
            return {
                ...state,
                preferedColorScheme: action.payload.colorScheme
            }
        default:
            return state;
    }
}

const AppContextProvider = ({ children }: AppContextProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const contextValue = {
      state,
      dispatch,
    }
  
    return (
      <AppContext.Provider value={contextValue}>
        {children}
      </AppContext.Provider>
    );
};
  
  export { AppContext, AppContextProvider };