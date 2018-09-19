import { createStore, applyMiddleware } from 'redux'
import createSagaMiddeware from 'redux-saga'

import { composeWithDevTools } from 'redux-devtools-extension'

export default (rootReducer, rootSaga) => {
  const sagamiddleware = createSagaMiddeware()
  const middlewares = [sagamiddleware]

  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(...middlewares)
    )
  )

  sagamiddleware.run(rootSaga)
  return store
}
