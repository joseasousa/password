import {
  all,
  takeLatest,
  put,
} from 'redux-saga/effects';

import {
  createProfile,
  login,
  auth,
} from './auth';

import {
  storeSite,
  getAllSites,
} from './site';

import {
  Types as AuthTypes,
  Creators as AuthCreator,
} from '../store/auth';

import { Types as SiteTypes } from '../store/site';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.CREATE_AUTH_REQUEST, createProfile),
    takeLatest(AuthTypes.LOGIN_REQUEST, login),
    takeLatest(AuthTypes.AUTH_REQUEST, auth),
    takeLatest(SiteTypes.CREATE_SITE_REQUEST, storeSite),
    takeLatest(SiteTypes.SITE_REQUEST, getAllSites),

    put(AuthCreator.authRequest()),
  ]);
}
