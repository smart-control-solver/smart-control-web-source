import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import taskReducer from './task-reducer';
import rootEpic from './epics';

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
  const store = createStore(
    taskReducer,
    applyMiddleware(epicMiddleware)
  );

  epicMiddleware.run(rootEpic as any);

  return store;
}