import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js';
import 'babel-polyfill';

import { StoreProvider } from './context/context';

window.onload = () => {
    ReactDOM.render(
        <StoreProvider>
            <App />
        </StoreProvider>
    , document.getElementById('app'));
};
