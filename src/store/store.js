import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

// this logger enables us to see what the state looks like before an action is dispatched and what the action is, and what the state is, after the action
const middlewares = [logger];

// compose composes multiple functions into a single fn
const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
