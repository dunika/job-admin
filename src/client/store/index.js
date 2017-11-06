import createSagaMiddleware from 'redux-saga';
import nextReduxSaga from 'next-redux-saga';
import withRedux from 'next-redux-wrapper';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { reducer as form } from 'redux-form';

import { isDevelopment, isServer } from 'isomorphic/utils';
import { reducer as jobs } from 'client/modules/jobs';
import { reducer as indeed } from 'client/modules/indeed';
import rootSaga from './saga';

const reducer = combineReducers({
  indeed,
  jobs,
  form,
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

function configureStore(initialState = {}) {
  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
}

export function withReduxSaga(Component, ...rest) {
  return withRedux(configureStore, ...rest)(nextReduxSaga(Component));
}
