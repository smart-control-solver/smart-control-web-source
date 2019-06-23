import createReducer from '../createReducer';
import functionalReducer from './functional-reducer';
import variablesReducer from './variables-reducer';
import managementReducer from './management-reducer';
import { IState, initialState, IValidation } from '../state';
import derivativesReducer from './derivatives-reducer';
import methodReducer from './method-reducer';
import wasmReducer from './wasm-reducer';

export default createReducer({
    ...functionalReducer,
    ...variablesReducer,
    ...managementReducer,
    ...derivativesReducer,
    ...methodReducer,
    ...wasmReducer,
    ...{
        VALIDITY_UPDATE(state: IState, action: IValidityUpdate){
            return {
                ...state,
                editingTask: {
                    ...state.task,
                    validation: {
                        ...state.task.validation,
                        [action.key]: action.value
                    }
                }
            }
        },
        RESET(state: IState) {
            return {
                ...state,
                editingTask: initialState.task
            }
        },

    }
});

export interface IValidityUpdate {
    key: string;
    value: IState['task']['validation'][keyof IValidation];
}