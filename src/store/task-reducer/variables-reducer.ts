import { IState, IVariable, getEmptyVariable } from '../state';

export default {
    VARIABLE_UPDATE(state: IState, action: {var: IVariable; index: number}) {
        const vars = [
            ...state.editingTask.variableStep.vars.slice(0, action.index),
            {
                ...action.var,
                t0: action.var.xt0 || 0,
                T: action.var.pT || 1,
            },
            ...state.editingTask.variableStep.vars.slice(action.index + 1),
        ];
        return {
            ...state,
            editingTask: {
                ...state.editingTask,
                variableStep: {
                    vars,
                },
                validation: {
                    ...state.editingTask.validation,
                    variableStep: {
                        ...state.editingTask.validation.functionalStep,
                        valid: vars.every(v => !!(v.f && v.p))
                    }
                }
            }
        }
    },
    VARIABLE_ADD(state: IState) {
        const allVars = [
            ...state.editingTask.variableStep.vars,
            getEmptyVariable(),
        ];
        const newDfDx = [
            ...state.editingTask.derivativeStep.dfdx.map(row => [...row, '']),
            Array(allVars.length).fill('')
        ];
        const newDfDu = [
            ...state.editingTask.derivativeStep.dfdu,
            Array(state.editingTask.managementStep.length).fill('')
        ];
        return {
            ...state,
            editingTask: {
                ...state.editingTask,
                variableStep: {
                    vars: allVars
                },
                derivativeStep: {
                    dfdx: newDfDx,
                    dfdu: newDfDu
                },
                validation: {
                    ...state.editingTask.validation,
                    variableStep: {
                        ...state.editingTask.validation.functionalStep,
                        valid: allVars.every(v => !!(v.f && v.p))
                    },
                    derivativeStep: {
                        ...state.editingTask.validation.functionalStep,
                        valid: false
                    }
                }
            }
        };
    },
    VARIABLE_REMOVE(state: IState, action: number) {
        const leftVars = [
            ...state.editingTask.variableStep.vars.slice(0, action),
            ...state.editingTask.variableStep.vars.slice(action + 1),
        ];
        const newDfDx = state.editingTask.derivativeStep.dfdx
            .filter((row, i) => i !== action)
            .map((row, i) => row.filter((dfdx, i) => i !== action));

        const newDfDu = state.editingTask.derivativeStep.dfdu
            .filter((row, i) => i !== action);
        return {
            ...state,
            editingTask: {
                ...state.editingTask,
                variableStep: {
                    vars: leftVars
                },
                derivativeStep: {
                    dfdx: newDfDx,
                    dfdu: newDfDu
                },
                validation: {
                    ...state.editingTask.validation,
                    variableStep: {
                        ...state.editingTask.validation.functionalStep,
                        valid: leftVars.every(v => !!(v.f && v.p))
                    },
                    derivativeStep: {
                        ...state.editingTask.validation.functionalStep,
                        valid: newDfDx.every(row => row.every(Boolean)) && newDfDu.every(row => row.every(Boolean))
                    }
                }
            }
        };
    }
}