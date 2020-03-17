import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer.jsx';

const middlewares = [logger]; // pode ter um ou mais middlewares...


const store = createStore(rootReducer,applyMiddleware(...middlewares));

export default store;