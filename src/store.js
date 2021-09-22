import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { dataListReducer, prefListReducer } from "./reducers/prefReducer";

const reducer = combineReducers({
  prefectureList: prefListReducer,
  dataList: dataListReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
