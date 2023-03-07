import React, { useState } from "react";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
    const [closeMenu, setCloseMenu] = useState(true);
  
    return (
        <Context.Provider value={{ closeMenu, setCloseMenu }}>
            {children}
        </Context.Provider>
    );
};