import rootReducers from "./reducer";
import {createStore} from "redux";

const store = createStore(rootReducers);

export default store;