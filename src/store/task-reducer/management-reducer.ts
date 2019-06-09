import { IState, IFunctional, getEmptyManager, IManager } from '../state';

export default {
    MANAGER_ADD(state: IState, action: IFunctional) {
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
    },
    MANAGER_UPDATE(state: IState, action: {
        key: keyof IManager,
        value: any,
        index: number
    }) {
        const updatingManager = state.editingTask.managementStep[action.index];
        const withEdittedManager = [
            ...state.editingTask.managementStep.slice(0, action.index),
            {
                ...updatingManager,
                [action.key]: action.value
            },
            ...state.editingTask.managementStep.slice(action.index + 1),
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
    },
    MANAGER_REMOVE(state: IState, action: number) {
        const withDelettedManager = state.editingTask.managementStep.filter((m, i) => i !== action);
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
    },
    DUDV_UPDATE(state: IState, action: {
        value: string,
        manager: number,
        dudv: number
    }) {
        const updatingManager = state.editingTask.managementStep[action.manager];
        const withEdittedManager = [
            ...state.editingTask.managementStep.slice(0, action.manager),
            {
                ...updatingManager,
                dudv: [
                    ...updatingManager.dudv.slice(0, action.dudv),
                    action.value,
                    ...updatingManager.dudv.slice(action.dudv + 1),
                ]
            },
            ...state.editingTask.managementStep.slice(action.manager + 1),
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
    },
    V_UPDATE(state: IState, action: {
        value: number,
        manager: number,
        interval: number,
        v: number
    }) {
        const updatingManager = state.editingTask.managementStep[action.manager];
        const withEdittedManager = [
            ...state.editingTask.managementStep.slice(0, action.manager),
            {
                ...updatingManager,
                v: [
                    ...updatingManager.v.slice(0, action.interval),
                    [
                        ...updatingManager.v[action.interval].slice(0, action.v),
                        action.value || 0,
                        ...updatingManager.v[action.interval].slice(action.v + 1),
                    ],
                    ...updatingManager.v.slice(action.interval + 1),
                ]
            },
            ...state.editingTask.managementStep.slice(action.manager + 1),
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
    },
    TK_UPDATE(state: IState, action: {
        value: number,
        manager: number,
        interval: number
    }) {
        const updatingManager = state.editingTask.managementStep[action.manager];
        const withEdittedManager = [
            ...state.editingTask.managementStep.slice(0, action.manager),
            {
                ...updatingManager,
                tk: [
                    ...updatingManager.tk.slice(0, action.interval),
                    action.value || 0,
                    ...updatingManager.tk.slice(action.interval + 1),
                ]
            },
            ...state.editingTask.managementStep.slice(action.manager + 1),
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
    },
    PARAMETER_ADD(state: IState, action: number) {
        const managerWithNewParameter = state.editingTask.managementStep[action];
        const withNewParametr = [
            ...state.editingTask.managementStep.slice(0, action),
            {
                ...managerWithNewParameter,
                v: managerWithNewParameter.v.map(interval => [...interval, 0]),
                dudv: [...managerWithNewParameter.dudv, '']
            },
            ...state.editingTask.managementStep.slice(action + 1),
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
    },
    PARAMETER_REMOVE(state: IState, action:  {manager: number, parameter: number}) {
        const managerWithDelettingParameter = state.editingTask.managementStep[action.manager];
        const withDeletedParameter = [
            ...state.editingTask.managementStep.slice(0, action.manager),
            {
                ...managerWithDelettingParameter,
                v: managerWithDelettingParameter.v.map(interval => interval.filter((v, i) => i !== action.parameter)),
                dudv: managerWithDelettingParameter.dudv.filter((v, i) => i !== action.parameter)
            },
            ...state.editingTask.managementStep.slice(action.manager + 1),
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
    },
    TIMESWITCHER_ADD(state: IState, action: number) {
        const mangerWithNewTimeSwitcher = state.editingTask.managementStep[action];
        const withNewTimeSwitcher = [
            ...state.editingTask.managementStep.slice(0, action),
            {
                ...mangerWithNewTimeSwitcher,
                v: [...mangerWithNewTimeSwitcher.v, Array(mangerWithNewTimeSwitcher.dudv.length).fill(0)],
                tk: [...mangerWithNewTimeSwitcher.tk, 0]
            },
            ...state.editingTask.managementStep.slice(action + 1),
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
    },
    TIMESWITCHER_REMOVE(state: IState, action: {manager: number, timeswitcher: number}) {
        const managerWithDelettingTimeSwitcher = state.editingTask.managementStep[action.manager];
        const withDeletedTimeSwitcher = [
            ...state.editingTask.managementStep.slice(0, action.manager),
            {
                ...managerWithDelettingTimeSwitcher,
                v: managerWithDelettingTimeSwitcher.v.filter((interval, i) => i !== action.timeswitcher),
                tk: managerWithDelettingTimeSwitcher.tk.slice(0, managerWithDelettingTimeSwitcher.tk.length - 1)
            },
            ...state.editingTask.managementStep.slice(action.manager + 1),
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
    }
}

