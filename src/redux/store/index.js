import { combineReducers, createStore } from "redux";
import authReducer from "../reducers/authReducer";
import documentReducer from "../reducers/documentReducer";
import appLoaderReducer from "../reducers/appLoaderReducer";

const rootReducer = combineReducers({
  documentReducer,
  authReducer,
  appLoaderReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
