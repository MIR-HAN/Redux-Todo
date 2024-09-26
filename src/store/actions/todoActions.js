

import ActionTypes from '../actionTypes';

export const deleteTodo = (payload) => {
  return {
    type: ActionTypes.DELETE,
    payload,
  };
};

export const updateTodo = (payload) => ({
  type: ActionTypes.UPDATE,
  payload,
});

export const addTodo = (payload) => ({
  type: ActionTypes.ADD,
  payload,
});

export const setTodos = (payload) => ({
  type: ActionTypes.SET,
  payload,
});
