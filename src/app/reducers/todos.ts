import { ActionReducer, Action, State } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../models/todo.model';


export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const CHANGE_STATE = 'CHANGE_STATE';
export const GET_TODOS = 'GET_TODOS';
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export const GET_TODOS_FAILURE = 'GET_TODOS_FAILURE';

export class AddTodo implements Action {
    type = ADD_TODO;
    constructor(public payload: any) { }
}
export class RemoveTodo implements Action {
    type = REMOVE_TODO;
    constructor(public payload: any) { }
}
export class ChangeState implements Action {
    type = CHANGE_STATE;
    constructor(public payload: any) { }
}
export class GetTodos implements Action {
    type = GET_TODOS;
    constructor(public payload: any) { }
}
export class GetTodosSuccess implements Action {
    type = GET_TODOS_SUCCESS;
    constructor(public payload: any) { }
}
export class GetTodosFailure implements Action {
    type = GET_TODOS_FAILURE;
    constructor(public payload: any) { }
}
export type Actions = AddTodo | RemoveTodo | ChangeState | GetTodos | GetTodosSuccess | GetTodosFailure;

const initialState = {
    pending: false,
    data: [],
    error: null,
};


export const todos = (state = initialState, action: Actions): any => {
    switch (action.type) {
        case ADD_TODO: {
            const newTodo = action.payload;
            return Object.assign({}, state, {
                data: [...state.data, Object.assign({}, newTodo)]
            });
        }
        case REMOVE_TODO: {
            const todoId = action.payload.id;
            return Object.assign({}, state, {
                data: state.data.filter(e => e.id !== todoId),
            });
        }
        case CHANGE_STATE: {
            const newState: boolean = action.payload.state;
            const todoId = action.payload.id;

            Object.assign({}, state, {
                data: state.data.map(t => {
                    if (t.id === todoId) {
                        t.state = newState;
                    }
                    return t;
                })
            });
            return state;
        }

        default:
            return state;
    }
}