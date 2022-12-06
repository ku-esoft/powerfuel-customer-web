import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import rootReducer from "./../reducers";

const loggerMiddleware = createLogger();
const middleware = [thunkMiddleware, loggerMiddleware];

export const store = createStore(
  rootReducer,
  // applyMiddleware(thunkMiddleware, loggerMiddleware),
  composeWithDevTools(applyMiddleware(...middleware))
);
