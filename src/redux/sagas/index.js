import { all, takeLatest } from 'redux-saga/effects';

import { createProfile, login } from './auth';
import { storeSite } from './site';

import { Types as AuthTypes } from '../store/auth';
import { Types as SiteTypes } from '../store/site';

export default function* rootSaga() {
  return yield all([
    takeLatest(
      AuthTypes.CREATE_AUTH_REQUEST,
      createProfile,
    ),
    takeLatest(
      AuthTypes.LOGIN_REQUEST,
      login,
    ),
    takeLatest(
      SiteTypes.CREATE_SITE_REQUEST,
      storeSite,
    ),
  ]);
}
