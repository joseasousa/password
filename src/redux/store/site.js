import { createReducer, createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  createSiteRequest: [],
  createSiteSuccess: ['user'],
  createSiteFailure: ['error'],
});

const INITIAL_STATE = {
  user: null,
  loading: false,
  error: null,
  isSaving: false,
  saved: false,
};

const createSiteRequest = (state = INITIAL_STATE, action) => ({
  ...state,
  isSaving: true,
  user: action.user,
  error: false,
  errorMessage: '',
  saved: false,
});

const createSiteSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isSaving: false,
  user: action.user,
  saved: true,
});

const createSiteFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isSaving: false,
  errorMessage: action.error,
  user: {},
  saved: false,
});

export default createReducer(INITIAL_STATE, {
  [Types.CREATE_SITE_REQUEST]: createSiteRequest,
  [Types.CREATE_SITE_SUCCESS]: createSiteSuccess,
  [Types.CREATE_SITE_FAILURE]: createSiteFailure,

});
