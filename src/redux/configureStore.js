import {
  createStore,
  applyMiddleware,
} from 'redux';

import createSagaMiddeware from 'redux-saga';

import {
  connectRouter,
  routerMiddleware,
} from 'connected-react-router';

import { composeWithDevTools } from 'redux-devtools-extension';

import history from '../history';

export default (rootReducer, rootSaga) => {
  const sagamiddleware = createSagaMiddeware();
  const middlewares = [
    sagamiddleware,
    routerMiddleware(history),
  ];

  const store = createStore(
    connectRouter(history)(rootReducer),
    composeWithDevTools(
      applyMiddleware(...middlewares),
    ),
  );

  sagamiddleware.run(rootSaga);
  return store;
};
