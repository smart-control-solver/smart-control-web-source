import { createStore } from 'redux';
import taskReducer from './task-reducer';

// const rootReducer = combineReducers({
//   history: historyReducer,
//   editingForm: taskReducer
// });

export default createStore(taskReducer);
