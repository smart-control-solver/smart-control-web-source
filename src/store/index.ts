import { createStore, combineReducers } from 'redux';
import taskReducer from './task-reducer';
import { historyReducer } from './history-reducer';

// const rootReducer = combineReducers({
//   history: historyReducer,
//   editingForm: taskReducer
// });

export default createStore(taskReducer);
