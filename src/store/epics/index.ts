import { combineEpics } from 'redux-observable';
import { wasmEpic } from './wasm.epic';

export default combineEpics(
  wasmEpic
);