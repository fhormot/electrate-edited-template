import React, { useState } from 'react';

const StoreContext = React.createContext();

const StoreProvider = (props) => {
    const [state, setState] = useState({
        welcome: "Hello Electrate"
    });

    const stateSetter = (event) => {
        setState((state) => ({...state, [event.name]: event.value}));
    }

    const value = {
        state, 
        stateSetter,
    }

    return (
        <StoreContext.Provider value={value}>
            {props.children}
        </StoreContext.Provider>
    )
}

export { StoreContext, StoreProvider };