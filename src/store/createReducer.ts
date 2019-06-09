import { initialState, IState } from './state';
import { Reducer } from 'redux';

export default (consumer: any): Reducer<IState> => (state = initialState, action) => {
    try {
        return consumer[action.type](state, action.payload);
    } catch {
        return state;
    }
};
