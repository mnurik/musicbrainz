import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import albumReducer from './../reducer/albums';

const reducer = combineReducers({
    albums: albumReducer
});

export default createStore(
    reducer,
    applyMiddleware(thunk)
);