import { legacy_createStore, combineReducers } from "redux"
import { appReducer } from "./app_state/reducer";
import { todoReducer } from "./Todo/reducer";

const rootReducer = combineReducers({
	appState: appReducer,
	todos: todoReducer,
})

export const store = legacy_createStore(rootReducer);
