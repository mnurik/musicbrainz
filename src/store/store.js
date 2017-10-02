import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import albumReducer from './../reducer/reducer';

export default createStore(
    albumReducer,
    composeWithDevTools(applyMiddleware(thunk))
);