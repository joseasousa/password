import { createReducer, createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  createAuthRequest: ['user'],
  createAuthSuccess: ['user'],
  createAuthFailure: ['error'],

  loginRequest: ['user'],
  loginSuccess: ['user'],
  loginFailure: ['error'],
});

const INITIAL_STATE = {
  user: null,
  loading: false,
  error: null,
  isSaving: false,
  saved: false,
};

const createAuthRequest = (state = INITIAL_STATE, action) => ({
  ...state,
  isSaving: true,
  user: action.user,
  error: false,
  errorMessage: '',
  saved: false,
});

const createSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isSaving: false,
  user: action.user,
  saved: true,
});

const createFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isSaving: false,
  errorMessage: action.error,
  user: {},
  saved: false,
});

const loginRequest = (state = INITIAL_STATE, action) => ({
  ...state,
  isSaving: true,
  user: action.user,
  error: false,
  errorMessage: '',
  saved: false,
});

const loginSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isSaving: false,
  user: action.user,
  saved: true,
});

const loginFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isSaving: false,
  errorMessage: action.error,
  user: {},
  saved: false,
});

export default createReducer(INITIAL_STATE, {
  [Types.CREATE_AUTH_REQUEST]: createAuthRequest,
  [Types.CREATE_AUTH_SUCCESS]: createSuccess,
  [Types.CREATE_AUTH_FAILURE]: createFailure,

  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,

});
