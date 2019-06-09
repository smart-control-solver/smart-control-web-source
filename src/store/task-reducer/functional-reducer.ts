import { IState, IFunctional } from '../state';

export default {
    FUNCTIONAL_UPDATE(state: IState, action: IFunctional) {
        return {
            ...state,
            editingTask: {
                ...state.editingTask,
                functionalStep: {
                    ...action,
                    t0: action.t0 || 0,
                    T: action.T || 1,
                },
                validation: {
                    ...state.editingTask.validation,
                    functionalStep: {
                        ...state.editingTask.validation.functionalStep,
                        valid: !!((action as IFunctional).functional) &&
                            state.editingTask.functionalStep.constants.every(constant => !!(constant.key && constant.value))
                    }
                }
            },
        };
    },
    CONSTANT_ADD(state: IState) {
        const constants = [
            ...state.editingTask.functionalStep.constants,
            {key: '', value: ''}
        ];
        return {
            ...state,
            editingTask: {
                ...state.editingTask,
                functionalStep: {
                    ...state.editingTask.functionalStep,
                    constants: constants
                },
                validation: {
                    ...state.editingTask.validation,
                    functionalStep: {
                        ...state.editingTask.validation.functionalStep,
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
            ...state.editingTask.functionalStep.constants.slice(0, payload.constantIndex),
            {...state.editingTask.functionalStep.constants[payload.constantIndex], [payload.prop]: payload.value},
            ...state.editingTask.functionalStep.constants.slice(payload.constantIndex + 1),
        ];
        return {
            ...state,
            editingTask: {
                ...state.editingTask,
                functionalStep: {
                    ...state.editingTask.functionalStep,
                    constants: constants
                },
                validation: {
                    ...state.editingTask.validation,
                    functionalStep: {
                        ...state.editingTask.validation.functionalStep,
                        valid: state.editingTask.functionalStep.functional &&
                            state.editingTask.functionalStep.constants.every(constant => !!(constant.key && constant.value))
                    }
                }
            },
        };
    },
    CONSTANT_REMOVE(state: IState, payload: number) {
        const constants = state.editingTask.functionalStep.constants.filter((v, i) => i !== payload);
        return {
            ...state,
            editingTask: {
                ...state.editingTask,
                functionalStep: {
                    ...state.editingTask.functionalStep,
                    constants: constants
                },
                validation: {
                    ...state.editingTask.validation,
                    functionalStep: {
                        ...state.editingTask.validation.functionalStep,
                        valid: state.editingTask.functionalStep.functional &&
                            state.editingTask.functionalStep.constants.every(constant => !!(constant.key && constant.value))
                    }
                }
            },
        };
    }
}