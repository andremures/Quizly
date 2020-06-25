// @flow

import {createStore, applyMiddleware} from "redux";
import {createLogger} from "redux-logger";
import rootReducer from "reducers/rootReducer";
import type { State } from "types/states";

const logger = createLogger();

export default function configureStore(initialState: State) {
  return createStore(rootReducer, initialState, applyMiddleware(logger));
}
