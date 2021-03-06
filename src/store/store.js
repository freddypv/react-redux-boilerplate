import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/';
import {createLogger} from 'redux-logger';
//import {loadState} from '../utility/localStorage';

import thunk from 'redux-thunk';
//const persistedState = loadState();
const middlewares = [];
middlewares.push(thunk);

if (process.env.REACT_APP_NODE_ENV !== 'production') {
  const loggerMiddleware = createLogger();
  middlewares.push(loggerMiddleware);
}

const configureStore = () => createStore(
  rootReducer,
  applyMiddleware(
    ...middlewares
  )
);

export default configureStore;
