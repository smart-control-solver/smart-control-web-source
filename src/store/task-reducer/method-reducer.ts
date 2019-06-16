import { IState, IMethod } from '../state';

export default {
    METHOD_UPDATE(state: IState, action: {key: keyof IMethod; value: any;}) {
        return {
            ...state,
            editingTask: {
                ...state.editingTask,
                methodStep: {
                    ...state.editingTask.methodStep,
                    [action.key]: action.value
                },
            },
        };
    },
}