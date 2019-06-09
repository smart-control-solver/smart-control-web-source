import { Reducer } from 'redux';
import { IState, IValidation, initialState, IFunctional, IVariable, getEmptyVariable, getEmptyManager } from './state';

export const taskReducer: Reducer<IState> = (state = initialState, action) => {
    switch (action.type) {
        case 'FUNCTIONAL_UPDATE':
            return {
                ...state,
                editingTask: {
                    ...state.editingTask,
                    functionalStep: {
                        ...action.payload,
                        t0: action.payload.t0 || 0,
                        T: action.payload.T || 1,
                    },
                    validation: {
                        ...state.editingTask.validation,
                        functionalStep: {
                            ...state.editingTask.validation.functionalStep,
                            valid: !!((action.payload as IFunctional).functional)
                        }
                    }
                }
            } as IState;
        case 'VARIABLE_UPDATE':
            const updatingVar: {var: IVariable; index: number} = action.payload;
            const vars = [
                ...state.editingTask.variableStep.vars.slice(0, updatingVar.index),
                {
                    ...updatingVar.var,
                    t0: action.payload.t0 || 0,
                    T: action.payload.T || 1,
                },
                ...state.editingTask.variableStep.vars.slice(updatingVar.index + 1),
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
            };
        case 'VARIABLE_ADD':
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
        case 'VARIABLE_REMOVE':
            const leftVars = [
                ...state.editingTask.variableStep.vars.slice(0, action.payload),
                ...state.editingTask.variableStep.vars.slice(action.payload + 1),
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
        case 'MANAGER_ADD':
            const withNewManager = [
                ...state.editingTask.managementStep,
                getEmptyManager()
            ];
            return {
                ...state,
                editingTask: {
                    ...state.editingTask,
                    managementStep: withNewManager,
                    validation: {
                        ...state.editingTask.validation,
                        variableStep: {
                            ...state.editingTask.validation.managementStep,
                            valid: withNewManager.every(m => !!(
                                m.u && m.dudv.every(Boolean)
                            ))
                        }
                    }
                }
            };
        case 'MANAGER_UPDATE':
            const updatingManager = state.editingTask.managementStep[action.payload.index];
            const withEdittedManager = [
                ...state.editingTask.managementStep.slice(0, action.payload.index),
                {
                    ...updatingManager,
                    [action.payload.key]: action.payload.value
                },
                ...state.editingTask.managementStep.slice(action.payload.index + 1),
            ];
            return {
                ...state,
                editingTask: {
                    ...state.editingTask,
                    managementStep: withEdittedManager,
                    validation: {
                        ...state.editingTask.validation,
                        variableStep: {
                            ...state.editingTask.validation.managementStep,
                            valid: withEdittedManager.every(m => !!(
                                m.u && m.dudv.every(Boolean)
                            ))
                        }
                    }
                }
            }
        case 'MANAGER_REMOVE':
            const withDelettedManager = state.editingTask.managementStep.filter((m, i) => i !== action.payload.index);
            return {
                ...state,
                editingTask: {
                    ...state.editingTask,
                    managementStep: withDelettedManager,
                    validation: {
                        ...state.editingTask.validation,
                        variableStep: {
                            ...state.editingTask.validation.managementStep,
                            valid: withDelettedManager.every(m => !!(
                                m.u && m.dudv.every(Boolean)
                            ))
                        }
                    }
                }
            }
        case 'DUDV_UPDATE': {
            const updatingManager = state.editingTask.managementStep[action.payload.manager];
            const withEdittedManager = [
                ...state.editingTask.managementStep.slice(0, action.payload.manager),
                {
                    ...updatingManager,
                    dudv: [
                        ...updatingManager.dudv.slice(0, action.payload.dudv),
                        action.payload.value,
                        ...updatingManager.dudv.slice(action.payload.dudv + 1),
                    ]
                },
                ...state.editingTask.managementStep.slice(action.payload.manager + 1),
            ];
            return {
                ...state,
                editingTask: {
                    ...state.editingTask,
                    managementStep: withEdittedManager,
                    validation: {
                        ...state.editingTask.validation,
                        variableStep: {
                            ...state.editingTask.validation.managementStep,
                            valid: withEdittedManager.every(m => !!(
                                m.u && m.dudv.every(Boolean)
                            ))
                        }
                    }
                }
            }
        }
        case 'V_UPDATE': {
            const updatingManager = state.editingTask.managementStep[action.payload.manager];
            const withEdittedManager = [
                ...state.editingTask.managementStep.slice(0, action.payload.manager),
                {
                    ...updatingManager,
                    v: [
                        ...updatingManager.v.slice(0, action.payload.interval),
                        [
                            ...updatingManager.v[action.payload.interval].slice(0, action.payload.v),
                            action.payload.value || 0,
                            ...updatingManager.v[action.payload.interval].slice(action.payload.v + 1),
                        ],
                        ...updatingManager.v.slice(action.payload.interval + 1),
                    ]
                },
                ...state.editingTask.managementStep.slice(action.payload.manager + 1),
            ];
            return {
                ...state,
                editingTask: {
                    ...state.editingTask,
                    managementStep: withEdittedManager,
                    validation: {
                        ...state.editingTask.validation,
                        variableStep: {
                            ...state.editingTask.validation.managementStep,
                            valid: withEdittedManager.every(m => !!(
                                m.u && m.dudv.every(Boolean)
                            ))
                        }
                    }
                }
            }
        }
        case 'TK_UPDATE': {
            const updatingManager = state.editingTask.managementStep[action.payload.manager];
            const withEdittedManager = [
                ...state.editingTask.managementStep.slice(0, action.payload.manager),
                {
                    ...updatingManager,
                    tk: [
                        ...updatingManager.tk.slice(0, action.payload.interval),
                        action.payload.value || 0,
                        ...updatingManager.tk.slice(action.payload.interval + 1),
                    ]
                },
                ...state.editingTask.managementStep.slice(action.payload.manager + 1),
            ];
            return {
                ...state,
                editingTask: {
                    ...state.editingTask,
                    managementStep: withEdittedManager,
                    validation: {
                        ...state.editingTask.validation,
                        variableStep: {
                            ...state.editingTask.validation.managementStep,
                            valid: withEdittedManager.every(m => !!(
                                m.u && m.dudv.every(Boolean)
                            ))
                        }
                    }
                }
            }
        }
        case 'PARAMETER_ADD':
            const managerWithNewParameter = state.editingTask.managementStep[action.payload];
            const withNewParametr = [
                ...state.editingTask.managementStep.slice(0, action.payload),
                {
                    ...managerWithNewParameter,
                    v: managerWithNewParameter.v.map(interval => [...interval, 0]),
                    dudv: [...managerWithNewParameter.dudv, '']
                },
                ...state.editingTask.managementStep.slice(action.payload + 1),
            ];
            return {
                ...state,
                editingTask: {
                    ...state.editingTask,
                    managementStep: withNewParametr,
                    validation: {
                        ...state.editingTask.validation,
                        variableStep: {
                            ...state.editingTask.validation.managementStep,
                            valid: withNewParametr.every(m => !!(
                                m.u && m.dudv.every(Boolean)
                            ))
                        }
                    }
                }
            };
        case 'PARAMETER_REMOVE':
            const managerWithDelettingParameter = state.editingTask.managementStep[action.payload.manager];
            const withDeletedParameter = [
                ...state.editingTask.managementStep.slice(0, action.payload.manager),
                {
                    ...managerWithDelettingParameter,
                    v: managerWithDelettingParameter.v.map(interval => interval.filter((v, i) => i !== action.payload.parameter)),
                    dudv: managerWithDelettingParameter.dudv.filter((v, i) => i !== action.payload.parameter)
                },
                ...state.editingTask.managementStep.slice(action.payload.manager + 1),
            ];
            return {
                ...state,
                editingTask: {
                    ...state.editingTask,
                    managementStep: withDeletedParameter,
                    validation: {
                        ...state.editingTask.validation,
                        variableStep: {
                            ...state.editingTask.validation.managementStep,
                            valid: withDeletedParameter.every(m => !!(
                                m.u && m.dudv.every(Boolean)
                            ))
                        }
                    }
                }
            };
        case 'TIMESWITCHER_ADD':
            const mangerWithNewTimeSwitcher = state.editingTask.managementStep[action.payload];
            const withNewTimeSwitcher = [
                ...state.editingTask.managementStep.slice(0, action.payload),
                {
                    ...mangerWithNewTimeSwitcher,
                    v: [...mangerWithNewTimeSwitcher.v, Array(mangerWithNewTimeSwitcher.dudv.length).fill(0)],
                    tk: [...mangerWithNewTimeSwitcher.tk, 0]
                },
                ...state.editingTask.managementStep.slice(action.payload + 1),
            ];
            return {
                ...state,
                editingTask: {
                    ...state.editingTask,
                    managementStep: withNewTimeSwitcher,
                    validation: {
                        ...state.editingTask.validation,
                        variableStep: {
                            ...state.editingTask.validation.managementStep,
                            valid: withNewTimeSwitcher.every(m => !!(
                                m.u && m.dudv.every(Boolean)
                            ))
                        }
                    }
                }
            };
        case 'TIMESWITCHER_REMOVE':
            const managerWithDelettingTimeSwitcher = state.editingTask.managementStep[action.payload.manager];
            const withDeletedTimeSwitcher = [
                ...state.editingTask.managementStep.slice(0, action.payload.manager),
                {
                    ...managerWithDelettingTimeSwitcher,
                    v: managerWithDelettingTimeSwitcher.v.filter((interval, i) => i !== action.payload.timeswitcher),
                    tk: managerWithDelettingTimeSwitcher.tk.slice(0, managerWithDelettingTimeSwitcher.tk.length - 1)
                },
                ...state.editingTask.managementStep.slice(action.payload.manager + 1),
            ];
            return {
                ...state,
                editingTask: {
                    ...state.editingTask,
                    managementStep: withDeletedTimeSwitcher,
                    validation: {
                        ...state.editingTask.validation,
                        variableStep: {
                            ...state.editingTask.validation.managementStep,
                            valid: withDeletedTimeSwitcher.every(m => !!(
                                m.u && m.dudv.every(Boolean)
                            ))
                        }
                    }
                }
            };
        case 'VALIDITY_UPDATE':
            const payload = action.payload as IValidityUpdate;
            return {
                ...state,
                editingTask: {
                    ...state.editingTask,
                    validation: {
                        ...state.editingTask.validation,
                        [payload.key]: payload.value
                    }
                }
            } as IState;
        case 'RESET':
            return {
                ...state,
                editingTask: initialState.editingTask
            } as IState;
    }
    return state;
};

export interface IValidityUpdate {
    key: string;
    value: IState['editingTask']['validation'][keyof IValidation];
}
