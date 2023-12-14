import rootReducer from "./reducer/reducers";
import {createStore, applyMiddleware} from "redux";

const store = createStore(rootReducer);

export default store;
