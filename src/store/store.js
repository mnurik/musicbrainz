import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import albumReducer from './../reducer/reducer';

const reducer = combineReducers({
    albums: albumReducer
});

export default createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
);