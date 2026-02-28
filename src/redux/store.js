import { createStore, combineReducers, applyMiddleware } from "redux";
import watchListReducer from "./watch-list-reducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({ watchListReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
