import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootEpic from './../epics';

import reducer from './../reducer';

export default createStore(
    reducer,
    composeWithDevTools(applyMiddleware(createEpicMiddleware(rootEpic)))
);