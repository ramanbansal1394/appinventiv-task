import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './rootReducer';

const persistConfig = {
  debug: false,
  key: 'root',
  keyPrefix: 'v.1',
  storage,
  whiteList: ['messages']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const logger = createLogger({
  // ...options
});

const store = process.env.REACT_APP_ENV === 'prod'
  ? createStore(persistedReducer)
  : createStore(persistedReducer, compose(applyMiddleware(logger)));

const persistor = persistStore(store)

export { store, persistor }