import React, { useContext } from 'react';
import { StoreContext } from '../context/context';

function App() {
    const contextStore = useContext(StoreContext);

    return (
        <div className={'hello'}>
            <h2>{contextStore.state.welcome}</h2>
            <img src="./assets/logo.png" />
            <h4>A basic Electron + React.js template</h4>
            <h4>Have Fun!</h4>
        </div>
    );
}

export default App;
