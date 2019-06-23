import { IState, IVariable, getEmptyVariable } from '../state';

export default {
    VARIABLE_UPDATE(state: IState, action: {var: IVariable; index: number}) {
        const vars = [
            ...state.task.variableStep.vars.slice(0, action.index),
            {
                ...action.var,
                t0: action.var.xt0 || 0,
                T: action.var.pT || 1,
            },
            ...state.task.variableStep.vars.slice(action.index + 1),
        ];
        return {
            ...state,
            task: {
                ...state.task,
                variableStep: {
                    vars,
                },
                validation: {
                    ...state.task.validation,
                    variableStep: {
                        ...state.task.validation.functionalStep,
                        valid: vars.every(v => !!(v.f && v.p))
                    }
                }
            }
        }
    },
    VARIABLE_ADD(state: IState) {
        const allVars = [
            ...state.task.variableStep.vars,
            getEmptyVariable(),
        ];
        const newDfDx = [
            ...state.task.derivativeStep.dfdx.map(row => [...row, '']),
            Array(allVars.length).fill('')
        ];
        const newDfDu = [
            ...state.task.derivativeStep.dfdu,
            Array(state.task.managementStep.length).fill('')
        ];
        return {
            ...state,
            task: {
                ...state.task,
                variableStep: {
                    vars: allVars
                },
                derivativeStep: {
                    dfdx: newDfDx,
                    dfdu: newDfDu
                },
                validation: {
                    ...state.task.validation,
                    variableStep: {
                        ...state.task.validation.functionalStep,
                        valid: allVars.every(v => !!(v.f && v.p))
                    },
                    derivativeStep: {
                        ...state.task.validation.functionalStep,
                        valid: false
                    }
                }
            }
        };
    },
    VARIABLE_REMOVE(state: IState, action: number) {
        const leftVars = [
            ...state.task.variableStep.vars.slice(0, action),
            ...state.task.variableStep.vars.slice(action + 1),
        ];
        const newDfDx = state.task.derivativeStep.dfdx
            .filter((row, i) => i !== action)
            .map((row, i) => row.filter((dfdx, i) => i !== action));

        const newDfDu = state.task.derivativeStep.dfdu
            .filter((row, i) => i !== action);
        return {
            ...state,
            task: {
                ...state.task,
                variableStep: {
                    vars: leftVars
                },
                derivativeStep: {
                    dfdx: newDfDx,
                    dfdu: newDfDu
                },
                validation: {
                    ...state.task.validation,
                    variableStep: {
                        ...state.task.validation.functionalStep,
                        valid: leftVars.every(v => !!(v.f && v.p))
                    },
                    derivativeStep: {
                        ...state.task.validation.functionalStep,
                        valid: newDfDx.every(row => row.every(Boolean)) && newDfDu.every(row => row.every(Boolean))
                    }
                }
            }
        };
    }
}