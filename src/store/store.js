import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import { rootReducer } from "./root-reducer";

// this logger enables us to see what the state looks like before an action is dispatched and what the action is, and what the state is, after the action

// we don't need logger to run in production.
const middlewares = [
  process.env.NODE_ENV !== "production" && logger,
  thunk,
].filter(Boolean); // .filter(Boolean) will filter out the boolean value and instead give us an empty array or obj if it's false. we get the desired value if it's true

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// compose composes multiple functions into a single fn
const composedEnhancers = composeEnhancers(applyMiddleware(...middlewares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
