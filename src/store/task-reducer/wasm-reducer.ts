import { IState } from '../state';

export default {
    WASM_STARTED(state: IState) {
        return {
            ...state,
            calculating: {
                ...state.calculating,
                inprogress: true
            }
        }
    },
    WASM_STOPPED(state: IState) {
        return {
            ...state,
            calculating: {
                ...state.calculating,
                inprogress: false,
                finished: false,
                progress: null,
                error: ''
            }
        }
    },
    WASM_NEXT(state: IState, payload: string) {
        return {
            ...state,
            calculating: {
                ...state.calculating,
                progress: payload,
            }
        }
    },
    WASM_COMPLETE(state: IState) {
        return {
            ...state,
            calculating: {
                ...state.calculating,
                finished: true,
            }
        }
    },
    WASM_ERROR(state: IState, payload: string) {
        return {
            ...state,
            calculating: {
                ...state.calculating,
                error: payload
            }
        }
    },
};
