import { IState } from '../state';

export default {
    DFDX_UPDATE(state: IState, action: {
        fIndex: number,
        xIndex: number,
        dfdx: string
    }) {
        const derivatives = [
            ...state.task.derivativeStep.dfdx.slice(0, action.fIndex),
            [
                ...state.task.derivativeStep.dfdx[action.fIndex].slice(0, action.xIndex),
                action.dfdx,
                ...state.task.derivativeStep.dfdx[action.fIndex].slice(action.xIndex + 1),
            ],
            ...state.task.derivativeStep.dfdx.slice(action.fIndex + 1),
        ];
        return {
            ...state,
            task: {
                ...state.task,
                derivativeStep: {
                    ...state.task.derivativeStep,
                    dfdx: derivatives
                },
                validation: {
                    ...state.task.validation,
                    derivativeStep: {
                        ...state.task.validation.derivativeStep,
                        valid: derivatives.every(row => row.every(Boolean)) &&
                            state.task.derivativeStep.dfdu.every(row => row.every(Boolean))
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
            ...state.task.derivativeStep.dfdu.slice(0, action.fIndex),
            [
                ...state.task.derivativeStep.dfdu[action.fIndex].slice(0, action.uIndex),
                action.dfdu,
                ...state.task.derivativeStep.dfdu[action.fIndex].slice(action.uIndex + 1),
            ],
            ...state.task.derivativeStep.dfdu.slice(action.fIndex + 1),
        ];
        return {
            ...state,
            task: {
                ...state.task,
                derivativeStep: {
                    ...state.task.derivativeStep,
                    dfdu: derivatives
                },
                validation: {
                    ...state.task.validation,
                    derivativeStep: {
                        ...state.task.validation.functionalStep,
                        valid: derivatives.every(row => row.every(Boolean)) &&
                            state.task.derivativeStep.dfdx.every(row => row.every(Boolean))
                    }
                }
            }
        };
    }
}