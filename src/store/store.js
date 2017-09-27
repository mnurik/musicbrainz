import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import albumReducer from './../reducer/albums';

export default createStore(
    albumReducer,
    applyMiddleware(thunk)
);