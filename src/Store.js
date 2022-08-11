import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import todosReducer from "./Services/Reducers/TodosReducer";



const store = createStore(todosReducer,
applyMiddleware(thunk));

export default store;