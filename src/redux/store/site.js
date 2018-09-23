import { createReducer, createActions } from 'reduxsauce';


export const { Types, Creators } = createActions({
  createSiteRequest: ['site'],
  createSiteSuccess: ['site'],
  createSiteFailure: ['error'],

  siteRequest: [],
  siteSuccess: ['sites'],
  siteFailure: ['error'],
});

const INITIAL_STATE = {
  sites: [],
  site: {},
  loading: false,
  error: null,
  isSaving: false,
  saved: false,
};


const siteRequest = (state = INITIAL_STATE) => ({
  ...state,
  loading: true,
  error: false,
  errorMessage: '',
  saved: false,
});

const siteSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isSaving: false,
  sites: action.sites,
  saved: true,
});

const siteFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isSaving: false,
  errorMessage: action.error,
  user: {},
  saved: false,
});

const createSiteRequest = (state = INITIAL_STATE, action) => ({
  ...state,
  isSaving: true,
  site: action.site,
  error: false,
  errorMessage: '',
  saved: false,
});

const createSiteSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isSaving: false,
  site: action.site,
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

  [Types.SITE_REQUEST]: siteRequest,
  [Types.SITE_SUCCESS]: siteSuccess,
  [Types.SITE_FAILURE]: siteFailure,

  [Types.CREATE_SITE_REQUEST]: createSiteRequest,
  [Types.CREATE_SITE_SUCCESS]: createSiteSuccess,
  [Types.CREATE_SITE_FAILURE]: createSiteFailure,

});
