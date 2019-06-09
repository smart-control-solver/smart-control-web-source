import { IState, IVariable, getEmptyVariable } from '../state';

export default {
    DFDX_UPDATE(state: IState, action: {
        fIndex: number,
        xIndex: number,
        dfdx: string
    }) {
        const derivatives = [
            ...state.editingTask.derivativeStep.dfdx.slice(0, action.fIndex),
            [
                ...state.editingTask.derivativeStep.dfdx[action.fIndex].slice(0, action.xIndex),
                action.dfdx,
                ...state.editingTask.derivativeStep.dfdx[action.fIndex].slice(action.xIndex + 1),
            ],
            ...state.editingTask.derivativeStep.dfdx.slice(action.fIndex + 1),
        ];
        return {
            ...state,
            editingTask: {
                ...state.editingTask,
                derivativeStep: {
                    ...state.editingTask.derivativeStep,
                    dfdx: derivatives
                },
                validation: {
                    ...state.editingTask.validation,
                    derivativeStep: {
                        ...state.editingTask.validation.derivativeStep,
                        valid: derivatives.every(row => row.every(Boolean)) &&
                            state.editingTask.derivativeStep.dfdu.every(row => row.every(Boolean))
                    }
                }
            }
        }
    },
    DFDU_UPDATE(state: IState, action: {
        fIndex: number,
        uIndex: number,
        dfdu: string
    }) {
        const derivatives = [
            ...state.editingTask.derivativeStep.dfdu.slice(0, action.fIndex),
            [
                ...state.editingTask.derivativeStep.dfdu[action.fIndex].slice(0, action.uIndex),
                action.dfdu,
                ...state.editingTask.derivativeStep.dfdu[action.fIndex].slice(action.uIndex + 1),
            ],
            ...state.editingTask.derivativeStep.dfdu.slice(action.fIndex + 1),
        ];
        return {
            ...state,
            editingTask: {
                ...state.editingTask,
                derivativeStep: {
                    ...state.editingTask.derivativeStep,
                    dfdu: derivatives
                },
                validation: {
                    ...state.editingTask.validation,
                    derivativeStep: {
                        ...state.editingTask.validation.functionalStep,
                        valid: derivatives.every(row => row.every(Boolean)) &&
                            state.editingTask.derivativeStep.dfdx.every(row => row.every(Boolean))
                    }
                }
            }
        };
    }
}