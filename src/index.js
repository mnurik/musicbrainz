import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker';
import App from './app/App';
import store from './store';

import './index.css';
import "font-awesome/css/font-awesome.css";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();