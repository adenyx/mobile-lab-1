/**
 * @prettier
 */

const initialState = {
  userList: [],
  currentUser: {},
};

const UPDATE_USER_LIST = 'UPDATE_USER_LIST';
const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER';
const CLEAR_CURRENT_USER = 'CLEAR_CURRENT_USER';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_LIST: {
      return {
        ...state,
        userList: action.payload,
      };
    }
    case UPDATE_CURRENT_USER: {
      return {
        ...state,
        currentUser: { ...state.currentUser, ...action.payload },
      };
    }
    case CLEAR_CURRENT_USER: {
      return {
        ...state,
        currentUser: initialState.currentUser,
      };
    }
    default:
      return state;
  }
};

export const updateUserList = payload => ({
  type: UPDATE_USER_LIST,
  payload,
});

export const updateCurrentUser = payload => ({
  type: UPDATE_CURRENT_USER,
  payload,
});

export const clearCurrentUser = () => ({
  type: CLEAR_CURRENT_USER,
});

export default reducer;
