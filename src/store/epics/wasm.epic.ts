import { ofType, Epic, combineEpics } from 'redux-observable';
import { tap, ignoreElements, mergeMap, withLatestFrom, pluck } from 'rxjs/operators';
import { IState } from '../state';
import { fromEvent } from 'rxjs';

const wasmStartEpic: Epic<any, any, IState> = (action$, state$) => action$.pipe(
    ofType('WASM_START'),
    tap(console.log),
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
        // заворачиваем в таймаут на случай моментального ответа от воркера, до того, как мы успели подписаться
        setTimeout(() => state.worker.postMessage({
            type: 'solve',
            task: state.editingTask
        }));
        return fromEvent(state.worker, 'message').pipe(pluck('data'))
    })
);

const wasmNextEpic: Epic = (action$, state$) => action$.pipe(
    ofType('WASM_NEXT'),
    tap(console.log),
    ignoreElements()
);

const wasmErrorEpic: Epic = (action$, state$) => action$.pipe(
    ofType('WASM_ERROR'),
    tap(console.log),
    ignoreElements()
);

const wasmCompleteEpic: Epic = (action$, state$) => action$.pipe(
    ofType('WASM_COMPLETE'),
    tap(console.log),
    ignoreElements()
);

export const wasmEpic = combineEpics(
    wasmStartEpic,
    wasmNextEpic,
    wasmErrorEpic,
    wasmCompleteEpic
)