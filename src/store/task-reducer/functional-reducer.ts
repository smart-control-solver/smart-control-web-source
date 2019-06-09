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
                        valid: !!((action as IFunctional).functional)
                    }
                }
            }
        } as IState;
    }
}