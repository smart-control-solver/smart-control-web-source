import { IState, IMethod } from '../state';

export default {
    METHOD_UPDATE(state: IState, action: {key: keyof IMethod; value: any;}) {
        return {
            ...state,
            task: {
                ...state.task,
                methodStep: {
                    ...state.task.methodStep,
                    [action.key]: action.value
                },
            },
        };
    },
}