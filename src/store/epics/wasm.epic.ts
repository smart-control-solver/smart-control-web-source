import { ofType, Epic, combineEpics } from 'redux-observable';
import { tap, withLatestFrom, pluck, map, switchMap } from 'rxjs/operators';
import { IState } from '../state';
import { fromEvent, merge, of } from 'rxjs';
import { Action } from 'redux';

type epicType = Epic<Action<any>, any, IState>

const wasmStartEpic: epicType = (action$, state$) => action$.pipe(
    ofType('WASM_START'),
    tap(console.log),
    withLatestFrom(state$),
    switchMap(([, state]) => {
        // заворачиваем в таймаут на случай моментального ответа от воркера, до того, как мы успели подписаться
        setTimeout(() => state.calculating.worker.postMessage({
            type: 'solve',
            task: state.task
        }));
        return merge(
            of({type: 'WASM_STARTED'}),
            fromEvent(state.calculating.worker, 'message').pipe(pluck('data'))
        )
    })
);

const wasmCancelEpic: epicType = (action$, state$) => action$.pipe(
    ofType('WASM_CANCEL'),
    tap(console.log),
    withLatestFrom(state$),
    map(([, state]) => {
        state.calculating.worker.postMessage({
            type: 'cancel'
        })
        return {type: 'WASM_STOPPED'};
    })
);

export const wasmEpic = combineEpics(
    wasmStartEpic,
    wasmCancelEpic
)