import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

ReactDOM.render(
    <StrictMode>
        <h1 class="heading">Hello Anna, hope you enjoy!</h1>
        <App />
    </StrictMode>,
    document.getElementById('app')
);
