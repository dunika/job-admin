import createSagaMiddleware from 'redux-saga';
import nextReduxSaga from 'next-redux-saga';
import withRedux from 'next-redux-wrapper';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

import { isDevelopment, isServer } from 'isomorphic';
import { reducer as jobs } from 'client/jobs';
import rootSaga from './saga';

const reducer = combineReducers({
  jobs,
});

const sagaMiddleware = createSagaMiddleware();

const loggerMiddleware = createLogger({
  collapsed: true,
  duration: true,
  predicate: () => isDevelopment && !isServer,
});

const middleware = [
  sagaMiddleware,
  loggerMiddleware,
];

export function configureStore(initialState = {}) {
  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
}

export function withReduxSaga(Component) {
  return withRedux(configureStore)(nextReduxSaga(Component));
}
