import  todoReducer from "./reducers";
import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(
    todoReducer,
    composeWithDevTools()
);

export default store;
