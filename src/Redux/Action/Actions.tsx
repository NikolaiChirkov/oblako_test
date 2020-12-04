import * as ActionTypes from './ActionTypes';

export const getList = (list: object) => ({
    type: ActionTypes.GET_LIST,
    payload: {
        list
    }
});

export const sendList = (list: object) => ({
    type: ActionTypes.POST_LIST,
    payload: {
        list
    }
});

export const deleteList = (id: number, list: object) => ({
    type: ActionTypes.DELETE_LIST,
    payload: {
        id,
        list
    }
});

export const pathcList = (id: number, list: object) => ({
    type: ActionTypes.PATCH_LIST,
    payload: {
        id,
        list
    }
});

export const sendTask = (list_id: number, todo: object) => ({
    type: ActionTypes.POST_TASK,
    payload: {
        list_id,
        todo
    }
})

export const deleteTask = (id: number, todo: object) => ({
    type: ActionTypes.DELETE_TASK,
    payload: {
        id,
        todo
    }
});

export const patchTask = (list_id: number, id: number, todo: object) => ({
    type: ActionTypes.PATCH_TASK,
    payload: {
        list_id,
        id,
        todo
    }
});