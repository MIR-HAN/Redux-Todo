import ActionTypes from '../actionTypes';

const initialState = {
  todos: [],
  isDarkMode: true,
  x: '',
  y: '',
};

const todoReducer = (state = initialState, action) => {
  // Update based on the action's type
  switch (action.type) {
    // If the ADD action is triggered:
    case ActionTypes.ADD:
      return {
        ...state, // Preserve the other values in the state
        todos: state.todos.concat(action.payload), // Add the new todo
      };

    // If the DELETE action is triggered:
    case ActionTypes.DELETE:
      // Filter out the item to be removed
      const filtred = state.todos.filter((i) => i.id !== action.payload);
      // Update the todos value stored in the reducer
      return { ...state, todos: filtred };

    // If the UPDATE action is triggered:
    case ActionTypes.UPDATE:
      // Replace the old item with the new one from the action payload
      const updatedArrr = state.todos.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );

      // Update the todos stored in the reducer
      return { ...state, todos: updatedArrr };

    // If the SET action is triggered:
    case ActionTypes.SET:
      return { ...state, todos: action.payload };

    // If the action is none of the above, preserve the current state
    default:
      return state;
  }
};

export default todoReducer;
