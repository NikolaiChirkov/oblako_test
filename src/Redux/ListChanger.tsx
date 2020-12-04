import * as ActionFunctions from './Action/ActionFunctions';
import * as ActionTypes from './Action/ActionTypes';

const initialState = {}

export default function(state = initialState, action: { type: any, payload: any }) {
    switch (action.type) {
        case (ActionTypes.GET_LIST): {
            const { list } = action.payload;
            return { ...state, ...list };
        }
        case ActionTypes.POST_LIST: {
            const { list } = action.payload;
            return { ...state, ...list };
        }
        case ActionTypes.DELETE_LIST: {
            const { list } = action.payload;
            return { ...list };
        }
        case ActionTypes.PATCH_LIST: {
            const { list } = action.payload;
            return {...state, ...list};
        }
        case ActionTypes.POST_TASK: {
            const { todo } = action.payload;
            return {...state, ...todo}
        }
        case ActionTypes.DELETE_TASK: {
            const { todo } = action.payload;
            return { ...todo }
        }
        case ActionTypes.PATCH_TASK: {
            const { todo } = action.payload;
            return {...state, ...todo}
        }
        default: {
            return state;
        }
    }
}