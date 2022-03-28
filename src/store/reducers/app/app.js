/**
 * @prettier
 */

const initialState = {
  loading: false,
  success: false,
  failure: false,
  data: null,
};

const APP_LOADING_REQUEST = 'APP_LOADING_REQUEST';
const APP_LOADING_SUCCESS = 'APP_LOADING_SUCCESS';
const APP_LOADING_FAILURE = 'APP_LOADING_FAILURE';
const SET_APP_DATA = 'SET_APP_DATA';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_LOADING_REQUEST: {
      return {
        ...state,
        loading: true,
        success: false,
        failure: false,
      };
    }
    case APP_LOADING_SUCCESS: {
      return {
        ...state,
        loading: false,
        success: true,
        failure: false,
      };
    }
    case APP_LOADING_FAILURE: {
      return {
        ...state,
        loading: false,
        success: false,
        failure: true,
      };
    }
    case SET_APP_DATA:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default reducer;

export const appLoadingRequest = () => ({
  type: APP_LOADING_REQUEST,
});

export const appLoadingSuccess = () => ({
  type: APP_LOADING_SUCCESS,
});

export const appLoadingFailure = () => ({
  type: APP_LOADING_FAILURE,
});

export const setData = payload => ({
  type: SET_APP_DATA,
  payload,
});
