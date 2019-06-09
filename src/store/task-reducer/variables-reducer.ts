import { IState, IFunctional, IVariable, getEmptyVariable } from '../state';

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
        return {
            ...state,
            editingTask: {
                ...state.editingTask,
                variableStep: {
                    vars: allVars
                },
                validation: {
                    ...state.editingTask.validation,
                    variableStep: {
                        ...state.editingTask.validation.functionalStep,
                        valid: allVars.every(v => !!(v.f && v.p))
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
        return {
            ...state,
            editingTask: {
                ...state.editingTask,
                variableStep: {
                    vars: leftVars
                },
                validation: {
                    ...state.editingTask.validation,
                    variableStep: {
                        ...state.editingTask.validation.functionalStep,
                        valid: leftVars.every(v => !!(v.f && v.p))
                    }
                }
            }
        };
    }
}