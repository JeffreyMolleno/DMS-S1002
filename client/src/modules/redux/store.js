//imports
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import indexReducers from "./Reducers/indexReducers";

const store = createStore(indexReducers, applyMiddleware(logger, thunk));


export default store;