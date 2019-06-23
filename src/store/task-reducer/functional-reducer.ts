import { IState, IFunctional } from '../state';

export default {
    FUNCTIONAL_UPDATE(state: IState, action: IFunctional) {
        return {
            ...state,
            task: {
                ...state.task,
                functionalStep: {
                    ...action,
                    t0: action.t0 || 0,
                    T: action.T || 1,
                },
                validation: {
                    ...state.task.validation,
                    functionalStep: {
                        ...state.task.validation.functionalStep,
                        valid: !!((action as IFunctional).functional) &&
                            state.task.functionalStep.constants.every(constant => !!(constant.key && constant.value))
                    }
                }
            },
        };
    },
    CONSTANT_ADD(state: IState) {
        const constants = [
            ...state.task.functionalStep.constants,
            {key: '', value: ''}
        ];
        return {
            ...state,
            task: {
                ...state.task,
                functionalStep: {
                    ...state.task.functionalStep,
                    constants: constants
                },
                validation: {
                    ...state.task.validation,
                    functionalStep: {
                        ...state.task.validation.functionalStep,
                        valid: false
                    }
                }
            },
        };
    },
    CONSTANT_UPDATE(state: IState, payload: {
        constantIndex: number,
        prop: 'key' | 'value',
        value: string
    }) {
        const constants = [
            ...state.task.functionalStep.constants.slice(0, payload.constantIndex),
            {...state.task.functionalStep.constants[payload.constantIndex], [payload.prop]: payload.value},
            ...state.task.functionalStep.constants.slice(payload.constantIndex + 1),
        ];
        return {
            ...state,
            task: {
                ...state.task,
                functionalStep: {
                    ...state.task.functionalStep,
                    constants: constants
                },
                validation: {
                    ...state.task.validation,
                    functionalStep: {
                        ...state.task.validation.functionalStep,
                        valid: state.task.functionalStep.functional &&
                            state.task.functionalStep.constants.every(constant => !!(constant.key && constant.value))
                    }
                }
            },
        };
    },
    CONSTANT_REMOVE(state: IState, payload: number) {
        const constants = state.task.functionalStep.constants.filter((v, i) => i !== payload);
        return {
            ...state,
            task: {
                ...state.task,
                functionalStep: {
                    ...state.task.functionalStep,
                    constants: constants
                },
                validation: {
                    ...state.task.validation,
                    functionalStep: {
                        ...state.task.validation.functionalStep,
                        valid: state.task.functionalStep.functional &&
                            state.task.functionalStep.constants.every(constant => !!(constant.key && constant.value))
                    }
                }
            },
        };
    }
}