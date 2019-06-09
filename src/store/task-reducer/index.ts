import createReducer from '../createReducer';
import functionalReducer from './functional-reducer';
import variablesReducer from './variables-reducer';
import managementReducer from './management-reducer';
import { IState, initialState, IValidation } from '../state';

export default createReducer({
    ...functionalReducer,
    ...variablesReducer,
    ...managementReducer,
    ...{
        VALIDITY_UPDATE(state: IState, action: IValidityUpdate){
            return {
                ...state,
                editingTask: {
                    ...state.editingTask,
                    validation: {
                        ...state.editingTask.validation,
                        [action.key]: action.value
                    }
                }
            }
        },
        RESET(state: IState) {
            return {
                ...state,
                editingTask: initialState.editingTask
            }
        }
    }
});

export interface IValidityUpdate {
    key: string;
    value: IState['editingTask']['validation'][keyof IValidation];
}