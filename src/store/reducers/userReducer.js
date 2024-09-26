const initialState = {
  users: [],
  x: '',
  y: '',
};

const userReducer = (state = initialState, action) => {
  // Update based on the action's type
  switch (action.type) {
    case 'ADD':
      return state;

    case 'REMOVE':
      return state;

    // If the action doesn't match any of the above cases, preserve the current state
    default:
      return state;
  }
};

export default userReducer;
