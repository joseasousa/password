import { createReducer, createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  authRequest: [],
  authSuccess: ['token'],
  authFailure: ['error'],

  createAuthRequest: ['user'],
  createAuthSuccess: ['user'],
  createAuthFailure: ['error'],

  loginRequest: ['user'],
  loginSuccess: ['token'],
  loginFailure: ['error'],
});

const INITIAL_STATE = {
  user: null,
  token: '',
  loading: false,
  error: null,
  isSaving: false,
  saved: false,
};

const createAuthRequest = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: true,
  user: action.user,
  error: false,
  errorMessage: '',
  saved: false,
});

const createAuthSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isSaving: false,
  token: action.token,
  saved: true,
});

const createAuthFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isSaving: false,
  errorMessage: action.error,
  user: {},
  token: '',
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
  token: action.token,
  saved: true,
});

const loginFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isSaving: false,
  errorMessage: action.error,
  user: {},
  saved: false,
});

const authRequest = (state = INITIAL_STATE) => ({
  ...state,
  issAsigningin: true,
  error: false,
  errorMessage: '',
});

const authSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  token: action.token,
  issAsigningin: false,
  isAuth: true,
  error: false,
  errorMessage: '',
});

const authFailure = (state = INITIAL_STATE) => ({
  ...state,
  issAsigningin: true,
  error: false,
  isAuth: false,
  errorMessage: '',
});

export default createReducer(INITIAL_STATE, {
  [Types.AUTH_REQUEST]: authRequest,
  [Types.AUTH_SUCCESS]: authSuccess,
  [Types.AUTH_FAILURE]: authFailure,

  [Types.CREATE_AUTH_REQUEST]: createAuthRequest,
  [Types.CREATE_AUTH_SUCCESS]: createAuthSuccess,
  [Types.CREATE_AUTH_FAILURE]: createAuthFailure,

  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,
});
