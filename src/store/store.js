/*  Introduce the combined reducers to the store.*/
import { combineReducers, createStore } from 'redux';
import userReducer from './reducers/userReducer';
import todoReducer from './reducers/todoReducer';

// If there are multiple reducers combine them
const rootReducer = combineReducers({
  todoReducer,
  userReducer,
});

// The store is created
const store = createStore(rootReducer);

// Export it so it can be introduced to the project
export default store;
