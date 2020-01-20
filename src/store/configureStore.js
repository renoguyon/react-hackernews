import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

export default function configureStore(initialState) {
  const middlewares = [
    thunkMiddleware
  ];

  if (process.env.NODE_ENV === 'development') {
    // Push development middlewares here...
  }

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(...middlewares)
    )
  );

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./rootReducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
